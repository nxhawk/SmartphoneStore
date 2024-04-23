import { IProduct } from "./product";

export interface IProductCart {
  id: number;
  timeAddToCart: string;
  quantity: number;
  productId: IProduct;
}