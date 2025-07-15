import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BalanceModule } from './balance/balance.module';
import { Cuenta } from './entities/cuenta.entity';
import { Transaccion } from './entities/transaccion.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ApmErrorInterceptor } from './apm.interceptor';
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
    BalanceModule,
  ], providers: [
    { provide: APP_INTERCEPTOR, useClass: ApmErrorInterceptor },
  ]
})
export class AppModule {}
