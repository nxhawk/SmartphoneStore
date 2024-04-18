import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { Services } from 'src/utils/constants';
import { SendEmailService } from './send-email.service';

@Module({
  imports: [
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
