import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { OrderDetail } from './order-detail.entity';

@Entity('Order')
export class Order {
  @PrimaryGeneratedColumn()
  orderId: number;

  @Column()
  address: string;

  @Column()
  reciverName: string;

  @Column()
  phoneNumber: string;

  @Column()
  totalCost: number;

  @Column({ default: true })
  isPayment: boolean;

  @Column()
  status: string;

  @CreateDateColumn()
  timeOrder: Timestamp;

  // relationship
  @ManyToOne(() => User, (u) => u.order)
  @JoinColumn({ name: 'userId' })
  userId: User;

  @OneToMany(() => OrderDetail, (od) => od.orderId)
  orderDetails: OrderDetail[];
}
