import { HttpException, HttpStatus } from '@nestjs/common';

export class CodeNotMatch extends HttpException {
  constructor() {
    super('Code not match', HttpStatus.BAD_REQUEST);
  }
}
