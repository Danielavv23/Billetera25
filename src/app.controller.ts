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
@Get("/jose")
  getHello_jose(): string {
    return "hola jose";
  }
  @Get("/HART")
  getHello_HART(): string {
    return "hola HART";
  }

@Get("/Fernando")
  getHello_Fernando(): string {
    return "hola Fernando";
  }

  @Get("/Fredy")
  getHello_Fredy(): string {
    return "hola Fredy";
  }

}
