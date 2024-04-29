import { IOrderInfo } from "../../types/cart";
import AxiosClient from "../axios";

export const ApiOrderProduct = async (data: IOrderInfo) => {
  const res = await AxiosClient.post("/order", data);
  return res.data;
}