import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SendMail {
  constructor(private readonly mailService: MailerService) {}

  async sendMail(to: string, message: string) {
    return await this.mailService.sendMail({
      to,
      from: 'admin@gmail.com',
      subject: 'Verify Email Address',
      text: message,
    });
  }
}
