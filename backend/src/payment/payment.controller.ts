import {
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IVnpayService } from './interfaces/vnpay';
import { Request } from 'express';
import { AuthenticatedGuard } from 'src/auth/utils/Guards';
import { AuthUser } from 'src/utils/decorators';
import { User } from 'src/user/entities/user.entity';
import { IPaypalService } from './interfaces/paypal';

@Controller(Routes.PAYMENT)
export class PaymentController {
  constructor(
    @Inject(Services.VNPAY_SERVICE)
    private readonly vnpayService: IVnpayService,
    @Inject(Services.PAYPAL_SERVICE)
    private readonly paypalService: IPaypalService,
  ) {}

  @Post('/vnpay')
  @UseGuards(AuthenticatedGuard)
  async withVnpay(@AuthUser() user: User, @Req() req: Request) {
    return this.vnpayService.payment(user, req);
  }

  @Get('/vnpay_return/:token')
  // @UseGuards(AuthenticatedGuard)
  async returnVnpay(@Param('token') token: string, @Req() req: Request) {
    return this.vnpayService.getVnPayReturn(token, req);
  }

  @Post('/paypal')
  async withPaypal() {
    return this.paypalService.withPaypal();
  }

  @Get('/paypal-success')
  async withPaypalSuccess(@Req() req: Request) {
    return this.paypalService.paypalSuccess(req);
  }

  @Get('/paypal-cancle')
  async withPaypalCancel() {
    return 'Cancel';
  }
}
