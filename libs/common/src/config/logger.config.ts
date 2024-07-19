import AdmZip from 'adm-zip';
import { existsSync, unlinkSync } from 'fs';
import { WinstonModuleOptions } from 'nest-winston';
import * as path from 'path';
import * as winston from 'winston';
import WinstonDailyRotate from 'winston-daily-rotate-file';
import { Defaults } from './default.config';

/**
 * Description - Logger Middleware
 * @returns
 */
export const winstonOptions = (serviceName: string): WinstonModuleOptions => {
  const logsFilePath = path.join(path.resolve(), `./logs/`);
  const dailyRotateTransport = new WinstonDailyRotate({
    filename: logsFilePath + '%DATE%.log',
    datePattern: 'YYYY-MM-DD',
  });

  dailyRotateTransport.on('rotate', (oldFile: string) => {
    const zipFilePath = logsFilePath + Defaults.LOGS_ZIP_FILE;
    let zip = new AdmZip();
    if (existsSync(zipFilePath)) {
      zip = new AdmZip(logsFilePath + Defaults.LOGS_ZIP_FILE);
    }
    zip.addLocalFile(oldFile);
    zip.writeZip(zipFilePath);
    unlinkSync(oldFile);
  });

  return {
    exitOnError: false,
    level: 'debug',
    defaultMeta: {
      service: serviceName,
    },
    levels: {
      error: 0,
      warn: 1,
      fatal: 2,
      http: 3,
      debug: 4,
    },
    format: winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.json()
    ),
    transports: [
      new winston.transports.File({
        filename: Defaults.COMBINED_LOG_PATH,
        maxsize: 1048576,
      }),
      new winston.transports.File({
        filename: Defaults.ERROR_LOG_PATH,
        level: 'error',
        maxsize: 8388608,
      }),
      dailyRotateTransport,
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize({
            level: true,
            message: true,
            colors: { fatal: 'green', http: 'magenta' },
          }),
          winston.format.timestamp({ format: 'DD/MM/YYYY, HH:mm:ss a' }),
          winston.format.printf((info) => {
            const levelSymbol = Object.getOwnPropertySymbols(info).find(
              (sym) => sym.toString() === 'Symbol(level)'
            );
            const splatSymbol = Object.getOwnPropertySymbols(info).find(
              (sym) => sym.toString() === 'Symbol(splat)'
            );
            // const messageSymbol = Object.getOwnPropertySymbols(info).find(
            //   (sym) => sym.toString() === 'Symbol(message)'
            // );

            // Access the values using the Symbol references
            const levelValue = info[levelSymbol];
            const splatValue = info[splatSymbol];
            if (
              levelValue === 'http' &&
              Object.keys(splatValue[0]).includes('method')
            ) {
              return `\x1b[32m[${Defaults.APP_NAME}]  ${process.pid} -\x1b[0m ${info.timestamp} ${info.level} \x1b[33m[${serviceName}]\x1b[0m: ${info.message} \x1b[32m${info.method}\x1b[0m \x1b[34m${info.path}\x1b[0m \x1b[31m${info.statusCode}\x1b[0m ${info.contentLength} - ${info.userAgent} ${info.ip} + \x1b[33m${Date.now() - info.startTime}ms\x1b[0m`;
            }
            return `\x1b[32m[${Defaults.APP_NAME}]  ${process.pid} -\x1b[0m ${info.timestamp} ${info.level} \x1b[33m[${serviceName}]\x1b[0m: ${info.message} ${splatValue !== undefined ? `~ \n\n ${JSON.stringify(splatValue)}\n` : ''}`;
          })
        ),
      }),
    ],
  };
};
