import { Controller, Inject } from '@nestjs/common';
import { UserService } from './user.service';
import { Services } from 'src/utils/constants';

@Controller('user')
export class UserController {
  constructor(
    @Inject(Services.USERS)
    private readonly userService: UserService,
  ) {}
}
