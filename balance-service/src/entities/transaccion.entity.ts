import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'transacciones' })
export class Transaccion {
  @PrimaryGeneratedColumn({ name: 'id_transaccion', type: 'bigint' })
  id: string;

  @Column({ name: 'tipo_id', type: 'int' })
  tipoId: number;

  @Column({ name: 'nro_id', type: 'varchar', length: 20 })
  nroId: string;

  @Column({ name: 'fecha_hora', type: 'datetime' })
  fechaHora: Date;

  @Column({ name: 'tipo_cuenta', type: 'varchar', length: 10 })
  tipoCuenta: string;

  @Column({ name: 'nro_cuenta', type: 'varchar', length: 20 })
  nroCuenta: string;

  @Column({ name: 'operacion', type: 'varchar', length: 50 })
  operacion: string;

  @Column({ name: 'saldo_inicio', type: 'decimal', precision: 15, scale: 2 })
  saldoInicio: string;

  @Column({ name: 'saldo_final', type: 'decimal', precision: 15, scale: 2 })
  saldoFinal: string;

  @Column({ name: 'estado_operacion', type: 'varchar', length: 20, nullable: true })
  estadoOperacion?: string;

  @Column({ name: 'banco_origen', type: 'varchar', length: 50, nullable: true })
  bancoOrigen?: string;

  @Column({ name: 'banco_destino', type: 'varchar', length: 50, nullable: true })
  bancoDestino?: string;

  @Column({ name: 'tipo_cta_destino', type: 'varchar', length: 10, nullable: true })
  tipoCtaDestino?: string;

  @Column({ name: 'nro_cta_destino', type: 'varchar', length: 20, nullable: true })
  nroCtaDestino?: string;

  @Column({ name: 'id_medio', type: 'int', nullable: true })
  idMedio?: number;
}
