import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { Services } from 'src/utils/constants';
import { LocalStrategy } from './utils/LocalStrategy';
import { SessionSerializer } from './utils/SessionSerializer';
import { SendEmailModule } from 'src/send-email/send-email.module';
import { GoogleStrategy } from './utils/GoogleStrategy';

@Module({
  imports: [UserModule, SendEmailModule],
  controllers: [AuthController],
  providers: [
    LocalStrategy,
    GoogleStrategy,
    SessionSerializer,
    {
      provide: Services.AUTH,
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
