import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('cuentas25B')
export class CuentaEntity {

  @PrimaryColumn({ name: 'cue_tipo_cuenta' })
  tipoCuenta: string;

  @PrimaryColumn({ name: 'cue_nro_cuenta' })
  numeroCuenta: string;

  @Column({ name: 'cue_tipo_id' })
  tipoDocumento: string;

  @Column({ name: 'cue_nro_id' })
  numeroDocumento: string;

  @Column({ name: 'cue_saldo' })
  Saldo: string;

}
