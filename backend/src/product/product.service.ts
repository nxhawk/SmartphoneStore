import { Injectable } from '@nestjs/common';
import { IProduct } from './interfaces/product';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, LessThan, MoreThan, Repository } from 'typeorm';
import { ProductDetail } from './entities/product-details.entity';
import { SortByOption, filterByPrice } from 'src/utils/helpers';

@Injectable()
export class ProductService implements IProduct {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductDetail)
    private readonly productDetailRepository: Repository<ProductDetail>,
  ) {}

  getAll(query): Promise<Product[]> {
    // console.log(query);
    return this.productRepository.find({
      where: {
        productType: {
          name: Array.isArray(query['brand'])
            ? In([...query['brand']])
            : query['brand'],
        },
        price: filterByPrice(query['price']),
        rate: query['star'] ? Number(query['star']) : undefined,
      },
      relations: {
        productType: true,
      },
      ...SortByOption(query['sort']),
    });
  }
}
