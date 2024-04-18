import { MailerService } from '@nestjs-modules/mailer';
import { Inject, Injectable } from '@nestjs/common';
import { ISendEmailService } from './send-email';
import { contentEmailCode, randomCode } from 'src/utils/helpers';
import { InjectRepository } from '@nestjs/typeorm';
import { ForgotCode } from './entities/forgot-code.entity';
import { DeleteResult, Repository } from 'typeorm';
import { IUserService } from 'src/user/user';
import { Services } from 'src/utils/constants';
import { UserNotFound } from 'src/user/exceptions/UserNotFound';
import { User } from 'src/user/entities/user.entity';
import { CodeNotMatch } from './exceptions/CodeNotMatch';

@Injectable()
export class SendEmailService implements ISendEmailService {
  constructor(
    @Inject(Services.USERS) private readonly userService: IUserService,
    private readonly mailService: MailerService,
    @InjectRepository(ForgotCode)
    private readonly forgotCodeRepository: Repository<ForgotCode>,
  ) {}

  async sendCode(to: string) {
    const user = await this.userService.findUser({ email: to });
    if (!user) throw new UserNotFound();

    const currentCode = await this.forgotCodeRepository.findOneBy({
      user,
    });

    if (currentCode) {
      await this.forgotCodeRepository.remove(currentCode);
    }

    const code = randomCode();
    const newCode = await this.forgotCodeRepository.create({
      code,
      user,
    });
    await this.forgotCodeRepository.save(newCode);

    return await this.mailService.sendMail({
      to,
      from: 'admin@gmail.com',
      subject: 'Code reset password',
      html: contentEmailCode(code),
    });
  }

  async getCode(code: string): Promise<User> {
    const codeMatch = await this.forgotCodeRepository.findOne({
      where: { code },
      relations: { user: true },
    });

    if (!codeMatch) throw new CodeNotMatch();
    return codeMatch.user;
  }

  async deleteCode(code: string): Promise<DeleteResult> {
    const codeMatch = await this.forgotCodeRepository.findOne({
      where: { code },
    });

    return await this.forgotCodeRepository.delete(codeMatch);
  }
}
