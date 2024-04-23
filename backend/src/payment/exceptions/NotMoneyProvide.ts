import { HttpException, HttpStatus } from '@nestjs/common';

export class NotMoneyProvide extends HttpException {
  constructor() {
    super('Money not provide', HttpStatus.BAD_REQUEST);
  }
}
