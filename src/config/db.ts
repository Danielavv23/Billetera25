import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ClienteEntity } from 'src/entities/clientes25B.entity';
import { CuentaEntity } from 'src/entities/cuentas25B.entity';


@Injectable()
export class ConfigMySql implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: '192.168.9.225',
      port: 3306,
      username: 'arq1',
      password: '2wgzlVxFoU#zUbMg80qz',
      database: 'arq1',
      entities: [ ClienteEntity , CuentaEntity ],
      synchronize: false,
      extra: {
        connectionLimit: 10, // Configura el tamaño del pool de conexiones
      },
      logging: ['error', 'warn', 'info', 'log'],
    };
  }
}