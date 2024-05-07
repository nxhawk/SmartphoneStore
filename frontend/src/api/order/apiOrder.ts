import { IOrderInfo } from "../../types/cart";
import AxiosClient from "../axios";

export const ApiGetAllMyOrder = async() => {
  const res = await AxiosClient.get("/order");
  return res.data;
}

export const ApiOrderProduct = async (data: IOrderInfo) => {
  const res = await AxiosClient.post("/order", data);
  return res.data;
}

export const ApiOrderProductWithVnpay = async (data: IOrderInfo) => {
  const res = await AxiosClient.post("/payment/vnpay", data);
  return res.data;
}

export const ApiOrderProductWithPaypal = async (data: IOrderInfo) => {
  const res = await AxiosClient.post("/payment/paypal", data);
  return res.data;
}