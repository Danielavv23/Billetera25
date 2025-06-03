import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "Hola Mundo";
 //   return this.appService.getHello();
  }
  @Get("/daniela")
  getHelloDaniela(): string {
    return "Hola Daniela";
  }
}
