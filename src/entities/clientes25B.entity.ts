import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('clientes25B')
export class ClienteEntity {

  @PrimaryColumn({ name: 'cli_tipo_id' })
  tipoDocumento: string;

  @PrimaryColumn({ name: 'cli_nro_id' })
  numeroDocumento: string;

  @Column({ name: 'cli_nombre' })
  Nombre: string;

  @Column({ name: 'cli_apellido' })
  Apellido: string;

  @Column({ name: 'cli_email' })
  Correo: string;
  
  @Column({ name: 'cli_ciudadania' })
  Ciudadania: string;  
  
  @Column({ name: 'cli_usuario' })
  Usuario: string;  
  
  @Column({ name: 'cli_clave' })
  Clave: string;  
  
}