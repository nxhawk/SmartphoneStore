import { Inject, Injectable } from '@nestjs/common';
import { IAuthService } from './auth';
import { User } from 'src/user/entities/user.entity';
import { ValidateUserDetails } from 'src/utils/types';
import { Services } from 'src/utils/constants';
import { IUserService } from 'src/user/user';
import { InvalidCredentials } from './exceptions/InvalidCredentials';
import { compareHash } from 'src/utils/helpers';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(Services.USERS) private readonly userService: IUserService,
  ) {}

  async validateUser(userCredentials: ValidateUserDetails): Promise<User> {
    const user = await this.userService.findUser(
      { email: userCredentials.email },
      { selectAll: true },
    );

    if (!user) throw new InvalidCredentials();
    // check password
    const isPasswordValid = await compareHash(
      userCredentials.password,
      user.password,
    );
    return isPasswordValid ? user : null;
  }
}
