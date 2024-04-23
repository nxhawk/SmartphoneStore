import { IGetProductsResponse } from 'src/utils/types';
import { ProductDetail } from '../entities/product-details.entity';
import { Product } from '../entities/product.entity';

export interface IProduct {
  getAll(query: any): Promise<IGetProductsResponse>;
  getById(productId: string): Promise<ProductDetail>;
  getPById(productId: number): Promise<Product>;
}
