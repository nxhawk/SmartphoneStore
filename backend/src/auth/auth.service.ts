import { Inject, Injectable } from '@nestjs/common';
import { IAuthService } from './auth';
import { User } from 'src/user/entities/user.entity';
import { ResetPasswordForm, ValidateUserDetails } from 'src/utils/types';
import { Services } from 'src/utils/constants';
import { IUserService } from 'src/user/user';
import { InvalidCredentials } from './exceptions/InvalidCredentials';
import { compareHash } from 'src/utils/helpers';
import { UpdateResult } from 'typeorm';
import { ISendEmailService } from 'src/send-email/send-email';
import { UserNotFound } from 'src/user/exceptions/UserNotFound';
import { AccountNotValid } from './exceptions/AccountNotValid';
import { CreateGoogleDto } from './dtos/create-user-google.dto';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(Services.USERS) private readonly userService: IUserService,
    @Inject(Services.SEND_MAIL_SERVICE)
    private readonly sendMailService: ISendEmailService,
  ) {}

  async validateUser(userCredentials: ValidateUserDetails): Promise<User> {
    const user = await this.userService.findUser(
      { email: userCredentials.email },
      { selectAll: true },
    );

    if (!user) throw new InvalidCredentials();
    // check account is valid
    if (!user.active) throw new AccountNotValid();
    // check password
    const isPasswordValid = await compareHash(
      userCredentials.password,
      user.password,
    );
    return isPasswordValid ? user : null;
  }

  async validateUserGoogle(details: CreateGoogleDto) {
    const user = await this.userService.findUser({ email: details.email });
    if (user) return user;
    return this.userService.createUser({
      email: details.email,
      name: details.name || 'Anonymous',
      password: details.password || '1234567890',
      phoneNumber: details.phoneNumber || '',
      avatar: details.avatar || 'https://ui-avatars.com/api/?name=No+Name',
    });
  }

  async resetPassword(
    resetPasswordForm: ResetPasswordForm,
  ): Promise<UpdateResult> {
    const user = await this.sendMailService.getCode(resetPasswordForm.code);
    if (!user) throw new UserNotFound();
    await this.sendMailService.deleteCode(resetPasswordForm.code);
    return this.userService.resetPassword(user, resetPasswordForm.password);
  }
}
