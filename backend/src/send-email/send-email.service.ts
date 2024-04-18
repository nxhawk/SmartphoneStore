import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ISendEmailService } from './send-email';

@Injectable()
export class SendEmailService implements ISendEmailService {
  constructor(private readonly mailService: MailerService) {}

  async sendCode(to: string) {
    return await this.mailService.sendMail({
      to,
      from: 'admin@gmail.com',
      subject: 'Verify Email Address',
      text: 'hello',
    });
  }
}
