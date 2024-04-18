import { User } from 'src/user/entities/user.entity';
import { DeleteResult } from 'typeorm';

export interface ISendEmailService {
  sendCode(to: string);
  getCode(code: string): Promise<User>;
  deleteCode(code: string): Promise<DeleteResult>;
}
