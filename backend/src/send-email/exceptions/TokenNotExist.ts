import { HttpException, HttpStatus } from '@nestjs/common';

export class TokenNotExist extends HttpException {
  constructor() {
    super('Token not exist', HttpStatus.BAD_REQUEST);
  }
}
