import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Inject,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { IAuthService } from './auth';
import { CreateAuthDto } from './dtos/create-auth.dto';
import { Routes, Services } from 'src/utils/constants';
import { AuthenticatedGuard, LocalAuthGuard } from './utils/Guards';
import { Response, Request } from 'express';
import { IUserService } from 'src/user/user';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH) private readonly authService: IAuthService,
    @Inject(Services.USERS) private readonly userService: IUserService,
  ) {}

  @Post('/register')
  async register(@Body() createAuthDto: CreateAuthDto) {
    return await this.userService.createUser(createAuthDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Res() res: Response) {
    return res.send(HttpStatus.OK);
  }

  @Get('/status')
  @UseGuards(AuthenticatedGuard)
  async status(@Req() req: Request, @Res() res: Response) {
    res.send(req.user);
  }
}
