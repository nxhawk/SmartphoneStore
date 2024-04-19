import { VerifyAccountDto } from 'src/auth/dtos/verify-account.dto';
import { User } from 'src/user/entities/user.entity';
import { DeleteResult } from 'typeorm';

export interface ISendEmailService {
  sendCode(to: string);
  getCode(code: string): Promise<User>;
  deleteCode(code: string): Promise<DeleteResult>;
  sendToken(to: string);
  verifyAccount(tokenDto: VerifyAccountDto): Promise<boolean>;
}
