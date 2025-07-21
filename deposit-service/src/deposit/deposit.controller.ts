import { Body, Controller, Post } from '@nestjs/common';
import { DepositService } from './deposit.service';

@Controller()
export class DepositController {
  constructor(private readonly depositService: DepositService) {}

@Post('deposito')
deposito(@Body() body: { tipoCuenta: string; nroCuenta: string; monto: number }) {
  const { tipoCuenta, nroCuenta, monto } = body;
  return this.depositService.deposit(tipoCuenta, nroCuenta, monto);
}
}
