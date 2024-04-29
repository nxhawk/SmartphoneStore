import {
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IVnpayService } from './interfaces/vnpay';
import { Request, Response } from 'express';
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
    const url = await this.vnpayService.payment(user, req);
    return { url };
  }

  @Get('/vnpay_return/:token')
  @UseGuards(AuthenticatedGuard)
  async returnVnpay(
    @AuthUser() user: User,
    @Param('token') token: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    await this.vnpayService.getVnPayReturn(user, token, req);
    return res.redirect(`${process.env.CLIENT_URL}/cart`);
  }

  @Post('/paypal')
  @UseGuards(AuthenticatedGuard)
  async withPaypal(
    @AuthUser() user: User,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    return this.paypalService.withPaypal(user, res, req);
  }

  @Get('/paypal-success')
  async withPaypalSuccess(@Req() req: Request, @Res() res: Response) {
    await this.paypalService.paypalSuccess(req, res);
    return res.redirect(`${process.env.CLIENT_URL}/cart`);
  }

  @Get('/paypal-cancle')
  async withPaypalCancel(@Res() res: Response) {
    return res.redirect(`${process.env.CLIENT_URL}/cart`);
  }
}
