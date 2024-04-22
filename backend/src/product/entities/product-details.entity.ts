import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity('ProductDetail')
export class ProductDetail {
  @Column()
  screen: string;

  @Column()
  os: string;

  @Column()
  cameraBehind: string;

  @Column()
  cameraFront: string;

  @Column()
  cpu: string;

  @Column()
  ram: string;

  @Column()
  rom: string;

  @Column()
  battery: string;

  @Column()
  sim: string;

  // relationship
  @PrimaryGeneratedColumn()
  @OneToOne(() => Product, (product) => product.productDetail)
  @JoinColumn({
    name: 'productId',
  })
  productId: Product;
}
