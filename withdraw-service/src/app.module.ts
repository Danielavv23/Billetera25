import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WithdrawModule } from './withdraw/withdraw.module';
import { Cuenta } from './entities/cuenta.entity';
import { Transaccion } from './entities/transaccion.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Cuenta, Transaccion],
      synchronize: false,
      extra: { connectionLimit: 10 },
      logging: ['error', 'warn', 'info', 'log'],
    }),
    WithdrawModule,
  ],
})
export class AppModule {}
