import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepositService } from './deposit.service';
import { DepositController } from './deposit.controller';
import { Cuenta } from '../entities/cuenta.entity';
import { Transaccion } from '../entities/transaccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cuenta, Transaccion])],
  controllers: [DepositController],
  providers: [DepositService],
})
export class DepositModule {}
