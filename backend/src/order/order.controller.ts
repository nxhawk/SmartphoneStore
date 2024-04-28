import { Controller, Inject } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IOrder } from './interfaces/order';

@Controller(Routes.ORDER)
export class OrderController {
  constructor(
    @Inject(Services.ORDER_SERVICE)
    private readonly orderService: IOrder,
  ) {}
}
