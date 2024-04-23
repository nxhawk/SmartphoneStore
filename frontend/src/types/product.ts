import { IComment } from "./comment";

export interface IProduct {
  productId: number;
  name: string;
  total: number;
  image: string;
  cost: number;
  price: number;
  discount: number;
  rate: number;
  releaseDate: string;
  comment?: IComment[];
}

export interface IProductDetails {
  productId: IProduct;
  screen: string;
  os: string;
  cameraBehind: string;
  cameraFront: string;
  cpu: string;
  ram: string;
  rom: string;
  battery: string;
  sim: string;
}