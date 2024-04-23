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

@Entity('Comment')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  commentId: number;

  @Column()
  name: string;

  @Column()
  content: string;

  @Column()
  rate: number;

  @CreateDateColumn()
  date: Timestamp;

  // relationship
  @ManyToOne(() => Product, (p) => p.comment)
  @JoinColumn({
    name: 'productId',
  })
  product: Product;
}
