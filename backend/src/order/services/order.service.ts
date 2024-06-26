import { Inject, Injectable } from '@nestjs/common';
import { IOrderService } from '../interfaces/order';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../entities/order.entity';
import { Repository } from 'typeorm';
import { OrderDetail } from '../entities/order-detail.entity';
import { User } from 'src/user/entities/user.entity';
import { OrderCreateDto } from '../dtos/order-create.dto';
import { Services } from 'src/utils/constants';
import { ICartService } from 'src/cart/cart';
import { IUserService } from 'src/user/user';
import { Cart } from 'src/cart/entities/cart.entity';

@Injectable()
export class OrderService implements IOrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(OrderDetail)
    private readonly orderDetailRepository: Repository<OrderDetail>,
    @Inject(Services.CART_SERVICE)
    private readonly cartService: ICartService,
    @Inject(Services.USERS)
    private readonly userService: IUserService,
  ) {}

  async createNewOrder(user: User, orderData: OrderCreateDto): Promise<Order> {
    const totalCost = await this.cartService.totalCost(user);
    let newOrder = await this.orderRepository.create({
      address: orderData.address,
      totalCost,
      reciverName: orderData.reciverName,
      phoneNumber: orderData.phoneNumber,
      userId: user,
      isPayment: orderData.isPayment,
    });

    newOrder = await this.orderRepository.save(newOrder);

    const currentCart = await this.cartService.getCart(user);
    await currentCart.map(async (cart: Cart) => {
      const currentOrderDetail = await this.orderDetailRepository.create({
        timeAddToCart: cart.timeAddToCart,
        quantity: cart.quantity,
        orderId: newOrder,
        productId: cart.productId,
      });

      await this.orderDetailRepository.save(currentOrderDetail);
    });

    if (orderData.paymentMethod === 'offline') {
      await this.cartService.clearCart(user);
    }

    return newOrder;
  }

  async updateStatusPayment(user: User): Promise<Order> {
    const order = await this.getOrderById(user);
    order.isPayment = true;
    await this.cartService.clearCart(user);
    return this.orderRepository.save(order);
  }

  async getAllOrder(user: User): Promise<Order[]> {
    return this.orderRepository
      .createQueryBuilder('order')
      .andWhere('order.userId = :userId', { userId: user.userId })
      .execute();
  }

  async getOrderById(user: User): Promise<Order> {
    return this.orderRepository
      .createQueryBuilder('order')
      .andWhere('order.userId = :userId', { userId: user.userId })
      .leftJoinAndSelect('order.orderDetails', 'od')
      .orderBy('order.orderId', 'DESC')
      .getOne();
  }
}
