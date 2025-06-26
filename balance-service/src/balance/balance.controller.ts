import { Controller, Get, Query } from '@nestjs/common';
import { BalanceService } from './balance.service';

@Controller()
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Get('saldo')
  getSaldo(
    @Query('tipoCuenta') tipoCuenta: string,
    @Query('nroCuenta') nroCuenta: string,
  ) {
    return this.balanceService.getBalance(tipoCuenta, nroCuenta);
  }
}
