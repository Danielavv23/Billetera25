
import { Injectable } from '@nestjs/common';
//import { appRepository } from './app.repository';

@Injectable()
export class AppService {

    constructor(
//    private repo: appRepository,
  ) {}

  getHello() {
//    return this.repo.getClientes();
     return 'A-B-C- DEVELOP D-E-F!';
    
  }
}


 
 
