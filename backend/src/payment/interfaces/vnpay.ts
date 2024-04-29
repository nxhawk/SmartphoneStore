import { Request } from 'express';
import { User } from 'src/user/entities/user.entity';

export interface IVnpayService {
  payment(user: User, req: Request);
  getVnPayReturn(user: User, token: string, req: Request);
}
