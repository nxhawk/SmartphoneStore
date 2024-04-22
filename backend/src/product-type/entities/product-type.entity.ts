import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Type')
export class ProductType {
  @PrimaryGeneratedColumn()
  typeId: number;

  @Column()
  name: string;

  @Column({ default: true })
  active: boolean;

  @OneToMany(() => Product, (p) => p.productType)
  productType: Product;
}
