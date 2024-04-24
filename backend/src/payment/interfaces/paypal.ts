import { Request } from 'express';

export interface IPaypalService {
  withPaypal();
  paypalSuccess(req: Request);
}
