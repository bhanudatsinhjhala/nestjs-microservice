import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { HelloWorldEvent } from './hello-world.event';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @EventPattern('hello_world')
  getHello(data: HelloWorldEvent): string {
    console.log('Auth Controller get called', data);
    return this.authService.getHello(data);
  }

  @MessagePattern({ cmd: 'namaste_duniya' })
  async namasteDuniya(): Promise<string> {
    return 'Namaste Duniya!';
  }
}
