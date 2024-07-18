import { APP_NAME } from '../types/common.type';

/**
 * Description - Default values
 */
export const Defaults = {
  APP_NAME: 'Jhala Tech',
  LOG_LEVEL: 'info',
  LOGS_ZIP_FILE: 'logs.zip',
  ERROR_LOG_PATH: 'logs/error.log',
  COMBINED_LOG_PATH: 'logs/combined.log',
  PASSWORD_CHARS:
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  TOKEN_EXPIRY_TIME: 24,
  EMAIL_SUBJECTS: {
    WELCOME_USER: `Welcome to ${APP_NAME}!`,
    FORGOT_PASSWORD_SUBJECT: `${APP_NAME} - Reset Password Request`,
  },
  PASSWORD_MIN_LENGTH: 8,
};
