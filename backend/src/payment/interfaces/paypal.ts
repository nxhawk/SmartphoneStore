import { Request, Response } from 'express';

export interface IPaypalService {
  withPaypal(res: Response);
  paypalSuccess(req: Request, res: Response);
}
