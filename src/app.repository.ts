import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { ClienteEntity } from 'src/entities/clientes25B.entity';
import { DataSource } from 'typeorm';

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
}