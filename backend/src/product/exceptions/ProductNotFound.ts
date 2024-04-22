import { HttpException, HttpStatus } from '@nestjs/common';

export class ProductNotFound extends HttpException {
  constructor() {
    super('Product Not Found', HttpStatus.BAD_REQUEST);
  }
}
