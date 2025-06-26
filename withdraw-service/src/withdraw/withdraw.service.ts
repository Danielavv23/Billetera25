import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cuenta } from '../entities/cuenta.entity';
import { Transaccion } from '../entities/transaccion.entity';

@Injectable()
export class WithdrawService {
  constructor(
    @InjectRepository(Cuenta)
    private readonly cuentaRepo: Repository<Cuenta>,
    @InjectRepository(Transaccion)
    private readonly transacRepo: Repository<Transaccion>,
  ) {}

  async withdraw(tipoCuenta: string, nroCuenta: string, monto: number) {
    const cuenta = await this.cuentaRepo.findOne({ where: { tipoCuenta, nroCuenta } });
    if (!cuenta) {
      throw new NotFoundException('Cuenta no encontrada');
    }
    const saldoActual = Number(cuenta.saldo);
    if (saldoActual < monto) {
      throw new BadRequestException('Fondos insuficientes');
    }
    const nuevoSaldo = saldoActual - monto;
    cuenta.saldo = nuevoSaldo.toFixed(2);
    await this.cuentaRepo.save(cuenta);

    const transac = this.transacRepo.create({
      tipoId: cuenta.tipoId,
      nroId: cuenta.nroId,
      fechaHora: new Date(),
      tipoCuenta: cuenta.tipoCuenta,
      nroCuenta: cuenta.nroCuenta,
      operacion: 'retiro',
      saldoInicio: saldoActual.toFixed(2),
      saldoFinal: nuevoSaldo.toFixed(2),
    });
    await this.transacRepo.save(transac);

    return { success: true, newSaldo: cuenta.saldo };
  }
}
