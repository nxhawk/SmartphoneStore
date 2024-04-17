import {
  Body,
  Controller,
  Inject,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Services } from 'src/utils/constants';
import { UpdateProfileDto } from './dtos/update-profile.dto';
import { AuthenticatedGuard } from 'src/auth/utils/Guards';
import { AuthUser } from 'src/utils/decorators';
import { User } from './entities/user.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('user')
export class UserController {
  constructor(
    @Inject(Services.USERS)
    private readonly userService: UserService,
  ) {}

  @Post('/profile')
  @UseGuards(AuthenticatedGuard)
  @UseInterceptors(FileInterceptor('avatar'))
  async updateProfile(
    @AuthUser() user: User,
    @Body() userProfileDto: UpdateProfileDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.userService.updateProfile(user, file, userProfileDto);
  }
}
