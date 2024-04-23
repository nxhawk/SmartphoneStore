import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { VnpayService } from './services/vnpay.service';
import { Services } from 'src/utils/constants';

@Module({
  controllers: [PaymentController],
  providers: [
    {
      provide: Services.VNPAY_SERVICE,
      useClass: VnpayService,
    },
  ],
})
export class PaymentModule {}
