import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy
  ) {}
  getHello(): string {
    console.log('service get called');
    this.authClient.emit('hello_world', 'Hello from microservice!');
    return 'Hello World!';
  }

  namasteDuniya() {
    return this.authClient.send({ cmd: 'namaste_duniya' }, {});
  }
}
