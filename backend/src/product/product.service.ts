import { Injectable } from '@nestjs/common';
import { IProduct } from './interfaces/product';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { ProductDetail } from './entities/product-details.entity';
import { SortByOption, filterByPrice } from 'src/utils/helpers';
import { IGetProductsResponse } from 'src/utils/types';

@Injectable()
export class ProductService implements IProduct {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductDetail)
    private readonly productDetailRepository: Repository<ProductDetail>,
  ) {}

  async getAll(query): Promise<IGetProductsResponse> {
    const perPage = 10;
    const currentPage = Number(query['page']) || 1;

    const [products, totalProduct] = await this.productRepository.findAndCount({
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
      skip: (currentPage - 1) * perPage,
      take: perPage,
    });

    const totalPage =
      Math.floor(totalProduct / perPage) + (totalProduct % perPage > 0 ? 1 : 0);

    const response: IGetProductsResponse = {
      products,
      totalPage,
      perPage,
      currentPage: 1,
    };
    return response;
  }
}
