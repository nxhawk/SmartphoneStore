import { ProductType } from 'src/product-type/entities/product-type.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductDetail } from './product-details.entity';
import { CommentEntity } from 'src/comment/entities/comment.entity';
import { Cart } from 'src/cart/entities/cart.entity';
import { OrderDetail } from 'src/order/entities/order-detail.entity';

@Entity('Product')
export class Product {
  @PrimaryGeneratedColumn()
  productId: number;

  @Column()
  name: string;

  @Column()
  total: number;

  @Column()
  image: string;

  @Column({ nullable: true })
  public_id: string;

  @Column()
  cost: number;

  @Column()
  price: number;

  @Column('decimal', { precision: 6, scale: 2 })
  discount: number;

  @Column('decimal', { precision: 6, scale: 1 })
  rate: number;

  @Column({ type: 'date' })
  releaseDate: string;

  // relationship
  @ManyToOne(() => ProductType, (productType) => productType, {
    cascade: ['update'],
  })
  @JoinColumn({ name: 'typeId' })
  productType: ProductType;

  @OneToOne(() => ProductDetail, (pd) => pd.productId)
  productDetail: ProductDetail;

  @OneToMany(() => CommentEntity, (cmt) => cmt.product)
  comment: CommentEntity[];

  @OneToMany(() => Cart, (c) => c.productId)
  cart: Cart[];

  @OneToMany(() => OrderDetail, (od) => od.productId)
  orderDetail: OrderDetail[];
}
