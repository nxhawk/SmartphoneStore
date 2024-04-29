import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './services/order.service';
import { Services } from 'src/utils/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderDetail } from './entities/order-detail.entity';
import { CartModule } from 'src/cart/cart.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderDetail]),
    CartModule,
    UserModule,
  ],
  controllers: [OrderController],
  providers: [
    {
      provide: Services.ORDER_SERVICE,
      useClass: OrderService,
    },
  ],
  exports: [
    {
      provide: Services.ORDER_SERVICE,
      useClass: OrderService,
    },
  ],
})
export class OrderModule {}
