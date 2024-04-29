import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { VnpayService } from './services/vnpay.service';
import { Services } from 'src/utils/constants';
import { PaypalService } from './services/paypal.service';
import { OrderModule } from 'src/order/order.module';
import { CartModule } from 'src/cart/cart.module';

@Module({
  imports: [OrderModule, CartModule],
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
