import { HttpException, HttpStatus } from '@nestjs/common';

export class CartError extends HttpException {
  constructor() {
    super('Cart Error', HttpStatus.BAD_REQUEST);
  }
}
