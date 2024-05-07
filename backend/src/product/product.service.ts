import { Injectable } from '@nestjs/common';
import { IProduct } from './interfaces/product';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, In, Repository } from 'typeorm';
import { ProductDetail } from './entities/product-details.entity';
import { SortByOption, filterByPrice } from 'src/utils/helpers';
import { IGetProductsResponse } from 'src/utils/types';
import { ProductNotFound } from './exceptions/ProductNotFound';

@Injectable()
export class ProductService implements IProduct {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductDetail)
    private readonly productDetailRepository: Repository<ProductDetail>,
  ) {}

  async getAll(query): Promise<IGetProductsResponse> {
    const perPage = Number(query['perPage']) || 10;
    const currentPage = Number(query['page']) || 1;
    const searchValue = query['search'] || '';

    const [products, totalProduct] = await this.productRepository.findAndCount({
      where: {
        productType: {
          name: Array.isArray(query['brand'])
            ? In([...query['brand']])
            : query['brand'],
        },
        price: filterByPrice(query['price']),
        rate: query['star'] ? Number(query['star']) : undefined,
        name: ILike(`%${searchValue}%`),
      },
      relations: {
        comment: true,
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

  async getById(productId: string) {
    const product = await this.productRepository.findOne({
      where: { productId: Number(productId) },
      relations: {
        comment: true,
      },
    });
    if (!product) throw new ProductNotFound();

    const productDetail = await this.productDetailRepository
      .createQueryBuilder('productDetail')
      .where('productDetail.productId = :id', { id: product.productId })
      .leftJoinAndSelect('productDetail.productId', 'product')
      .getOne();

    if (!productDetail) throw new ProductNotFound();
    return productDetail;
  }

  async getPById(productId: number): Promise<Product> {
    return this.productRepository.findOne({
      where: { productId },
    });
  }
}
