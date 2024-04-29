import { Request, Response } from 'express';
import { User } from 'src/user/entities/user.entity';

export interface IPaypalService {
  withPaypal(user: User, res: Response, req: Request);
  paypalSuccess(req: Request, res: Response);
}
