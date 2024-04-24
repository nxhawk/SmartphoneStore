import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { VnpayService } from './services/vnpay.service';
import { Services } from 'src/utils/constants';
import { PaypalService } from './services/paypal.service';

@Module({
  controllers: [PaymentController],
  providers: [
    {
      provide: Services.VNPAY_SERVICE,
      useClass: VnpayService,
    },
    {
      provide: Services.PAYPAL_SERVICE,
      useClass: PaypalService,
    },
  ],
})
export class PaymentModule {}
