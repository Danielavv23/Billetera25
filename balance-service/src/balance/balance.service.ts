import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cuenta } from '../entities/cuenta.entity';

@Injectable()
export class BalanceService {
  constructor(
    @InjectRepository(Cuenta)
    private readonly cuentaRepo: Repository<Cuenta>,
  ) {}

  async getBalance(tipoCuenta: string, nroCuenta: string) {
    const cuenta = await this.cuentaRepo.findOne({
      where: { tipoCuenta, nroCuenta },
    });
    if (!cuenta) {
      throw new NotFoundException('Cuenta no encontrada');
    }
    return {
      tipoCuenta,
      nroCuenta,
      saldo: cuenta.saldo,
    };
  }
}
