import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductDetail } from './entities/product-details.entity';
import { Services } from 'src/utils/constants';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductDetail])],
  controllers: [ProductController],
  providers: [
    {
      provide: Services.PRODUCT_SERVICE,
      useClass: ProductService,
    },
    {
      provide: Services.PRODUCT_DETAIL_SERVICE,
      useClass: ProductDetail,
    },
  ],
  exports: [
    {
      provide: Services.PRODUCT_SERVICE,
      useClass: ProductService,
    },
    {
      provide: Services.PRODUCT_DETAIL_SERVICE,
      useClass: ProductDetail,
    },
  ],
})
export class ProductModule {}
