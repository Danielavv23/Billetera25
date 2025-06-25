import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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
    return "Hola Daniela y jose";
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

  @Get("/Saldo/:nro_cuenta")
  getSaldo(@Param('nro_cuenta') cuenta: string) {
    return this.appService.getSaldo(cuenta) ;
  }

 // @Patch("/Consignar/:nro_cuenta/:monto")
 // consignar(
 //   @Param('nro_cuenta') cuenta: string,
 //   @Param('monto') monto: number
 // ) {
 //  return this.appService.consignar(cuenta, monto);
 // }


@Post("/ConsignarPOST")
consignar(@Body() body: { nro_cuenta: string; monto: number }) {
 return this.appService.consignar(body.nro_cuenta, body.monto);
}


@Post("/RetirarPOST")
retirar(@Body() body: { nro_cuenta: string; monto: number }) {
  return this.appService.retirar(body.nro_cuenta, body.monto);
}


}
