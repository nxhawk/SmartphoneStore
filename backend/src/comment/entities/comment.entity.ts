import { Product } from 'src/product/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Comment')
export class Comment {
  @PrimaryGeneratedColumn()
  commentId: number;

  @Column()
  name: string;

  @Column()
  context: string;

  @Column()
  rate: number;

  @Column({ type: 'date' })
  date: string;

  // relationship
  @ManyToOne(() => Product, (p) => p.comment)
  @JoinColumn({
    name: 'productId',
  })
  product: Product;
}
