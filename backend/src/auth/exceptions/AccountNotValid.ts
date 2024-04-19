import { HttpException, HttpStatus } from '@nestjs/common';

export class AccountNotValid extends HttpException {
  constructor() {
    super('Account Not Valid', HttpStatus.NOT_ACCEPTABLE);
  }
}
