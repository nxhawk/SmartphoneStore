import {
  Body,
  Controller,
  Get,
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
import { UpdatePasswordDto } from './dtos/update-password';
import { AuthUser } from 'src/utils/decorators';
import { User } from 'src/user/entities/user.entity';
import { GetCodeDto } from './dtos/getCode.dto';
import { ISendEmailService } from 'src/send-email/send-email';
import { ResetPasswordDto } from './dtos/reset-password.dto';
import { VerifyAccountDto } from './dtos/verify-account.dto';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH) private readonly authService: IAuthService,
    @Inject(Services.USERS) private readonly userService: IUserService,
    @Inject(Services.SEND_MAIL_SERVICE)
    private readonly sendMailService: ISendEmailService,
  ) {}

  @Post('/register')
  async register(@Body() createAuthDto: CreateAuthDto) {
    return await this.userService.createUser(createAuthDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Req() req: Request, @Res() res: Response) {
    return res.send(req.user);
  }

  @Get('/status')
  @UseGuards(AuthenticatedGuard)
  async status(@Req() req: Request, @Res() res: Response) {
    res.send(req.user);
  }

  @Post('/logout')
  @UseGuards(AuthenticatedGuard)
  logout(@Req() req: Request, @Res() res: Response) {
    req.logout((err) => {
      return err ? res.send(400) : res.send(200);
    });
  }

  @Post('/password')
  @UseGuards(AuthenticatedGuard)
  changePassword(
    @AuthUser() user: User,
    @Body() updatePasswordDto: UpdatePasswordDto,
  ) {
    return this.userService.updatePassword(user, updatePasswordDto);
  }

  @Post('/getCode')
  getCode(@Body() emailDto: GetCodeDto) {
    return this.sendMailService.sendCode(emailDto.email);
  }

  @Post('/resetPassword')
  resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(resetPasswordDto);
  }

  @Post('/verify')
  verifyAccout(@Body() tokenDto: VerifyAccountDto) {
    return this.sendMailService.verifyAccount(tokenDto);
  }
}
