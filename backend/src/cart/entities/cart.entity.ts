import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

@Entity('Cart')
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  timeAddToCart: Timestamp;

  @Column({ default: 1 })
  quantity: number;

  // relationship
  @ManyToOne(() => User, (u) => u.cart, {
    cascade: true,
  })
  @JoinColumn({
    name: 'userId',
  })
  userId: User;

  @ManyToOne(() => Product, (p) => p.cart, {
    cascade: true,
  })
  @JoinColumn({
    name: 'productId',
  })
  productId: Product;
}
