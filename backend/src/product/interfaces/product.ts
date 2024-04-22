import { Product } from '../entities/product.entity';

export interface IProduct {
  getAll(): Promise<Product[]>;
}
