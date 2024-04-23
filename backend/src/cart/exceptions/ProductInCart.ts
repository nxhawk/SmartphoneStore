import { HttpException, HttpStatus } from '@nestjs/common';

export class ProductInCart extends HttpException {
  constructor() {
    super('Product already in cart', HttpStatus.CONFLICT);
  }
}
