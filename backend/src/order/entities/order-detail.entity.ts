import { Product } from 'src/product/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { Order } from './order.entity';

@Entity('OrderDetail')
export class OrderDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  timeAddToCart: Timestamp;

  @Column({ default: 1 })
  quantity: number;

  // relationship
  @ManyToOne(() => Order, (o) => o.orderDetails, {
    cascade: true,
  })
  @JoinColumn({
    name: 'orderId',
  })
  orderId: Order;

  @ManyToOne(() => Product, (p) => p.orderDetail, {
    cascade: true,
  })
  @JoinColumn({
    name: 'productId',
  })
  productId: Product;
}
