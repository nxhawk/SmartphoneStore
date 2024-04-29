import { User } from 'src/user/entities/user.entity';
import { OrderCreateDto } from '../dtos/order-create.dto';
import { Order } from '../entities/order.entity';

export interface IOrderService {
  createNewOrder(user: User, orderData: OrderCreateDto): Promise<Order>;
  getAllOrder(user: User): Promise<Order[]>;
  updateStatusPayment(user: User): Promise<Order>;
  getOrderById(user: User): Promise<Order>;
}
