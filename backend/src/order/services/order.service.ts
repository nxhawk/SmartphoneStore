import { Injectable } from '@nestjs/common';
import { IOrder } from '../interfaces/order';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../entities/order.entity';
import { Repository } from 'typeorm';
import { OrderDetail } from '../entities/order-detail.entity';

@Injectable()
export class OrderService implements IOrder {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(OrderDetail)
    private readonly orderDetailRepository: Repository<OrderDetail>,
  ) {}
}
