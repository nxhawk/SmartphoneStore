import { IGetProductsResponse } from "src/utils/types";

export interface IProduct {
  getAll(query: any): Promise<IGetProductsResponse>;
}
