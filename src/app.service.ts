
import { Injectable } from '@nestjs/common';
import { appRepository } from './app.repository';

@Injectable()
export class AppService {

    constructor(
    private repo: appRepository,
  ) {}

  getHello() {
    return this.repo.getClientes();
    // return 'A-B-C- DEVELOP D-E-F!';
    
  }

  getSaldo( numeroCuenta:string) {
     return this.repo.getSaldo(numeroCuenta);
  }


  consignar(numeroCuenta: string, monto: number): Promise<void> {
       return this.repo.consignar(numeroCuenta, monto);
  }


   retirar(numeroCuenta: string, monto: number): Promise<void> {
       return this.repo.retirar(numeroCuenta, monto);
   }


}


 
 
