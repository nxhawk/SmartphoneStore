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
    forwardRef(() => UserModule),
    TypeOrmModule.forFeature([ForgotCode, VerifyCode]),
    TwilioModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (cfg: ConfigService) => ({
        accountSid: cfg.get('TWILIO_ACCOUNT_SID'),
        authToken: cfg.get('TWILIO_AUTH_TOKEN'),
      }),
      inject: [ConfigService],
    }),
    MailerModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        transport: {
          service: 'gmail',
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: config.get('MAIL_USER'),
            pass: config.get('MAIL_PASS'),
          },
        },
      }),
      inject: [ConfigService],
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
