import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BalanceService } from './balance.service';
import { BalanceController } from './balance.controller';
import { Cuenta } from '../entities/cuenta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cuenta])],
  controllers: [BalanceController],
  providers: [BalanceService],
})
export class BalanceModule {}
