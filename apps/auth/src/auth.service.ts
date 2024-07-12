import { Injectable } from '@nestjs/common';
import { HelloWorldEvent } from './hello-world.event';

@Injectable()
export class AuthService {
  getHello(data: HelloWorldEvent): string {
    console.log('data ------------>', data);
    return 'Hello World!';
  }
}
