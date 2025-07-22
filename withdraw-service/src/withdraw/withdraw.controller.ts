import { Body, Controller, Post } from '@nestjs/common';
import { WithdrawService } from './withdraw.service';

@Controller()
export class WithdrawController {
  constructor(private readonly withdrawService: WithdrawService) {}

  @Post('retiro')
  retiro(@Body() body: { tipoCuenta: string; nroCuenta: string; monto: number }) {
    const { tipoCuenta, nroCuenta, monto } = body;
    return this.withdrawService.withdraw(tipoCuenta, nroCuenta, monto);
  }
}
