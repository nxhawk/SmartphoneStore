import { IProduct } from "./product";

export interface IProductCart {
  id: number;
  timeAddToCart: string;
  quantity: number;
  productId: IProduct;
}

export enum PaymentMethod {
  OFFLINE = 'offline',
  VNPAY = 'vnpay',
  PAYPAL = 'paypal',
}

export interface IOrderInfo {
  reciverName: string;
  address: string;
  phoneNumber: string;
  notes: string;
  payMethod: PaymentMethod;
  isPayment: boolean;
}