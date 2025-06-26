import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WithdrawService } from './withdraw.service';
import { WithdrawController } from './withdraw.controller';
import { Cuenta } from '../entities/cuenta.entity';
import { Transaccion } from '../entities/transaccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cuenta, Transaccion])],
  controllers: [WithdrawController],
  providers: [WithdrawService],
})
export class WithdrawModule {}
