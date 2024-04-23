import { HttpException, HttpStatus } from '@nestjs/common';

export class VnpayError extends HttpException {
  constructor() {
    super('Vnpay Error', HttpStatus.BAD_REQUEST);
  }
}
