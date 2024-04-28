import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { AuthenticatedGuard } from 'src/auth/utils/Guards';
import { AuthUser } from 'src/utils/decorators';
import { User } from 'src/user/entities/user.entity';
import { OrderCreateDto } from './dtos/order-create.dto';
import { IOrderService } from './interfaces/order';

@Controller(Routes.ORDER)
export class OrderController {
  constructor(
    @Inject(Services.ORDER_SERVICE)
    private readonly orderService: IOrderService,
  ) {}

  @Post()
  @UseGuards(AuthenticatedGuard)
  async addNewOrder(
    @AuthUser() user: User,
    @Body() orderCreateDto: OrderCreateDto,
  ) {
    return this.orderService.createNewOrder(user, orderCreateDto);
  }
}
