import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './services/order.service';
import { Services } from 'src/utils/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderDetail } from './entities/order-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderDetail])],
  controllers: [OrderController],
  providers: [
    {
      provide: Services.ORDER_SERVICE,
      useClass: OrderService,
    },
  ],
})
export class OrderModule {}
