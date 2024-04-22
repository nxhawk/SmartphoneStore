import { filterProps } from "../../pages/AllProduct";
import { convertFilterParams } from "../../utils/helper";
import AxiosClient from "../axios";

export const getAllProduct = async (filter: filterProps[] | undefined, page: number, perPage: number) => {
  const res = await AxiosClient.get(`/product/all${convertFilterParams(filter, page, perPage)}`);
  return res.data;
}

export const getOneProduct = async (productId: number) => {
  const res = await AxiosClient.get(`/product/${productId}`);
  return res.data;
}