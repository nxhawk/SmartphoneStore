import { Module, forwardRef } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { Services } from 'src/utils/constants';
import { SendEmailService } from './send-email.service';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForgotCode } from './entities/forgot-code.entity';
import { VerifyCode } from './entities/verify-code.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ForgotCode, VerifyCode]),
    forwardRef(() => UserModule),
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
  providers: [
    {
      provide: Services.SEND_MAIL_SERVICE,
      useClass: SendEmailService,
    },
  ],
  exports: [
    {
      provide: Services.SEND_MAIL_SERVICE,
      useClass: SendEmailService,
    },
  ],
})
export class SendEmailModule {}
