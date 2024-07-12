import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('AUTH_SERVICE');
  const configService = new ConfigService();
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthModule,
    {
      transport: Transport.TCP,
      options: {
        host: configService.get('AUTH_SERVICE_HOST'),
        port: configService.get('AUTH_SERVICE_PORT'),
      },
    }
  );

  await app.listen();

  logger.log(`Auth service is running on ${process.env.AUTH_SERVICE_HOST}`);
}
bootstrap();
