import { Controller, Get, Inject, Query } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IProduct } from './interfaces/product';
import { IProductDetail } from './interfaces/product-detail';

@Controller(Routes.PRODUCT)
export class ProductController {
  constructor(
    @Inject(Services.PRODUCT_SERVICE)
    private readonly productService: IProduct,
    @Inject(Services.PRODUCT_DETAIL_SERVICE)
    private readonly productDetailService: IProductDetail,
  ) {}

  @Get('/all')
  async getAll(@Query() query) {
    return await this.productService.getAll(query);
  }
}
