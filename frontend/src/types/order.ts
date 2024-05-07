export enum OrderStatus {
  PENDING = 'pending',
  PAID = 'paid',
}

export interface IOrderInfo_User {
  order_isPayment: boolean;
  order_totalCost: number;
  order_timeOrder: string;
  order_orderId: number;
  order_status: OrderStatus;
}