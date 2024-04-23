import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { ICartService } from './cart';
import { AuthenticatedGuard } from 'src/auth/utils/Guards';
import { AuthUser } from 'src/utils/decorators';
import { User } from 'src/user/entities/user.entity';
import { AddToCartDto } from './dtos/addToCart.dto';

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
}
