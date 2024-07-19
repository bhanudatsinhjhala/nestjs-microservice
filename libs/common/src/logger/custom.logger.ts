import { Logger } from '@nestjs/common';

export class CustomLogger extends Logger {
  http(message: any, ...optionalParams: [...any, string?, string?]) {
    super.debug(message, ...optionalParams);
  }
}
