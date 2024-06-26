import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Services } from 'src/utils/constants';
import { ImageStorageModule } from 'src/image-storage/image-storage.module';
import { SendEmailModule } from 'src/send-email/send-email.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    ImageStorageModule,
    forwardRef(() => SendEmailModule),
  ],
  controllers: [UserController],
  providers: [
    {
      provide: Services.USERS,
      useClass: UserService,
    },
  ],
  exports: [
    {
      provide: Services.USERS,
      useClass: UserService,
    },
  ],
})
export class UserModule {}
