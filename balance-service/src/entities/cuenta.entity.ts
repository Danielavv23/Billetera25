import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'cuentas' })
export class Cuenta {
  @PrimaryColumn({ name: 'tipo_cuenta', type: 'varchar', length: 10 })
  tipoCuenta: string;

  @PrimaryColumn({ name: 'nro_cuenta', type: 'varchar', length: 20 })
  nroCuenta: string;

  @Column({ name: 'tipo_id', type: 'int' })
  tipoId: number;

  @Column({ name: 'nro_id', type: 'varchar', length: 20 })
  nroId: string;

  @Column({ name: 'saldo', type: 'decimal', precision: 15, scale: 2, default: 0 })
  saldo: string;
}
