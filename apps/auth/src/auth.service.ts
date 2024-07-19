import { Injectable } from '@nestjs/common';
import { HelloWorldEvent } from './hello-world.event';

@Injectable()
export class AuthService {
  getHello(data: HelloWorldEvent): string {
    return 'Hello World!';
  }
}
