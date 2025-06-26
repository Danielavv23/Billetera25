import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { ClienteEntity } from 'src/entities/clientes25B.entity';
import { DataSource } from 'typeorm';
import { CuentaEntity } from './entities/cuentas25B.entity';

@Injectable()
export class appRepository {
  constructor(@InjectDataSource() private dataSource: DataSource) {}

  async getClientes() {
    const data = await this.dataSource
      .getRepository(ClienteEntity)
      .createQueryBuilder('clientes25B')
      .select('clientes25B')
      .getMany();

   /* const query = `select * from clientes25B`;

    const data = await this.dataSource.query(query);

    return data;*/
    return []
  }

async getSaldo( numeroCuenta:string ) {

const data = await this.dataSource
      .getRepository(CuentaEntity)
      .createQueryBuilder('cuentas')
      .select('cuentas.Saldo')
      .where('cuentas.numeroCuenta = :x' , { x:numeroCuenta } )      
      .getOne();
      return data ;
  }

/*  
async consignar(numeroCuenta: string, monto: number): Promise<boolean> {

  const cuentaRepo = this.dataSource.getRepository(CuentaEntity);
  const cuenta = await cuentaRepo.findOneBy({ numeroCuenta });

  if (!cuenta) {
    throw new Error('Cuenta no encontrada');
  }

  // Convertir el saldo actual a número y sumarle el monto
  const saldoActual = parseFloat(cuenta.Saldo);
  const nuevoSaldo = saldoActual + monto;
  cuenta.Saldo = nuevoSaldo.toFixed(2); // Guardar como string con 2 decimales
  await cuentaRepo.save(cuenta);

  return true;
} */


async consignar(numeroCuenta: string, monto: number): Promise<void> {
await this.dataSource
.getRepository(CuentaEntity)
.createQueryBuilder()
.update()
.set({
Saldo: () => `CAST(Saldo AS FLOAT) + ${monto}`
})
.where('numeroCuenta = :numeroCuenta', { numeroCuenta })
.execute();
}


async retirar(numeroCuenta: string, monto: number): Promise<void> {
  const cuenta = await this.dataSource
    .getRepository(CuentaEntity)
    .createQueryBuilder("cuenta")
    .where("cuenta.numeroCuenta = :numeroCuenta", { numeroCuenta })
    .getOne();

  if (!cuenta) {
    throw new Error("Cuenta no encontrada.");
  }

  const saldoActual = parseFloat(cuenta.Saldo);

  if (saldoActual < monto) {
    throw new Error("Fondos insuficientes para realizar el retiro.");
  }

  await this.dataSource
    .getRepository(CuentaEntity)
    .createQueryBuilder()
    .update()
    .set({
      Saldo: () => `CAST(Saldo AS FLOAT) - ${monto}`
    })
    .where("numeroCuenta = :numeroCuenta", { numeroCuenta })
    .execute();
}


}