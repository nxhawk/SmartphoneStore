import { Injectable } from '@nestjs/common';
import { IProduct } from './interfaces/product';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDetail } from './entities/product-details.entity';

@Injectable()
export class ProductService implements IProduct {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductDetail)
    private readonly productDetailRepository: Repository<ProductDetail>,
  ) {}

  getAll(): Promise<Product[]> {
    return this.productRepository.find();
  }
}
