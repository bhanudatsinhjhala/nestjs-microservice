import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('controller get called');
    return this.appService.getHello();
  }

  @Get('namaste_duniya')
  namasteAnalytics() {
    return this.appService.namasteDuniya();
  }
}
