import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { Services } from 'src/utils/constants';
import { LocalStrategy } from './utils/LocalStrategy';
import { SessionSerializer } from './utils/SessionSerializer';
import { SendMail } from './send-mail.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    UserModule,
    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'nguyennhathao01012003@gmail.com',
          pass: 'jvvs tjjh vgbb jekt',
        },
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    LocalStrategy,
    SessionSerializer,
    {
      provide: Services.AUTH,
      useClass: AuthService,
    },
    SendMail,
  ],
})
export class AuthModule {}
