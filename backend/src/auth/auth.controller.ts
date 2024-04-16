import { Body, Controller, Inject, Post } from '@nestjs/common';
import { IAuthService } from './auth';
import { IUser } from '../user/user';
import { CreateAuthDto } from './dtos/create-auth.dto';
import { Routes, Services } from 'src/utils/constants';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH) private readonly authService: IAuthService,
    @Inject(Services.USERS) private readonly userService: IUser,
  ) {}

  @Post('/register')
  async register(@Body() createAuthDto: CreateAuthDto) {
    return await this.userService.createUser(createAuthDto);
  }
}
