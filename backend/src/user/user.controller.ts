import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Services } from 'src/utils/constants';
import { UpdateProfileDto } from './dtos/update-profile.dto';
import { AuthenticatedGuard } from 'src/auth/utils/Guards';
import { AuthUser } from 'src/utils/decorators';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(
    @Inject(Services.USERS)
    private readonly userService: UserService,
  ) {}

  @Post('/profile')
  @UseGuards(AuthenticatedGuard)
  async updateProfile(
    @AuthUser() user: User,
    @Body() userProfileDto: UpdateProfileDto,
  ) {
    return this.userService.updateProfile(user, userProfileDto);
  }
}
