import {
  Body,
  Controller,
  Delete,
  Inject,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { ICartService } from './cart';
import { AuthenticatedGuard } from 'src/auth/utils/Guards';
import { AuthUser } from 'src/utils/decorators';
import { User } from 'src/user/entities/user.entity';
import { AddToCartDto } from './dtos/addToCart.dto';
import { ChangeNumberOfProductDto } from './dtos/change-number-of-product.dto';

@Controller(Routes.CART)
export class CartController {
  constructor(
    @Inject(Services.CART_SERVICE)
    private readonly cartService: ICartService,
  ) {}

  @Post('/add')
  @UseGuards(AuthenticatedGuard)
  async addToCart(@AuthUser() user: User, @Body() { productId }: AddToCartDto) {
    return this.cartService.addToCart(user, productId);
  }

  @Post('/change')
  @UseGuards(AuthenticatedGuard)
  async changeNumberProduct(
    @AuthUser() user: User,
    @Body() { productId, value }: ChangeNumberOfProductDto,
  ) {
    return this.cartService.changeNumberOfProduct(user, productId, value);
  }

  @Delete('/delete')
  @UseGuards(AuthenticatedGuard)
  async deleteProductFromCart(
    @AuthUser() user: User,
    @Body() { productId }: AddToCartDto,
  ) {
    return this.cartService.deleteProductFromCart(user, productId);
  }
}
