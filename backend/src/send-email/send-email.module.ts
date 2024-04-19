import { Module, forwardRef } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { Services } from 'src/utils/constants';
import { SendEmailService } from './send-email.service';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForgotCode } from './entities/forgot-code.entity';
import { VerifyCode } from './entities/verify-code.entity';
import { TwilioModule } from 'nestjs-twilio';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([ForgotCode, VerifyCode]),
    TwilioModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (cfg: ConfigService) => ({
        accountSid: cfg.get('TWILIO_ACCOUNT_SID'),
        authToken: cfg.get('TWILIO_AUTH_TOKEN'),
      }),
      inject: [ConfigService],
    }),
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
