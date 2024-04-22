import { IGetProductsResponse } from 'src/utils/types';
import { ProductDetail } from '../entities/product-details.entity';

export interface IProduct {
  getAll(query: any): Promise<IGetProductsResponse>;
  getById(productId: string): Promise<ProductDetail>;
}
