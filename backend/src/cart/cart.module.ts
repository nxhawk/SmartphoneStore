import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Services } from 'src/utils/constants';
import { UserModule } from 'src/user/user.module';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([Cart]), UserModule, ProductModule],
  providers: [
    {
      provide: Services.CART_SERVICE,
      useClass: CartService,
    },
  ],
  controllers: [CartController],
})
export class CartModule {}
