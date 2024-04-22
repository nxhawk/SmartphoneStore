import { Product } from '../entities/product.entity';

export interface IProduct {
  getAll(query: any): Promise<Product[]>;
}
