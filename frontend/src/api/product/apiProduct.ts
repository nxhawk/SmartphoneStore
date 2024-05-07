import { filterProps } from "../../pages/AllProduct";
import { convertFilterParams } from "../../utils/helper";
import AxiosClient from "../axios";

export const getAllProduct = async (filter: filterProps[] | undefined, page: number, perPage: number, searchValue: string) => {
  const res = await AxiosClient.get(`/product/all${convertFilterParams(filter, page, perPage, searchValue)}`);
  return res.data;
}

export const getOneProduct = async (productId: number) => {
  const res = await AxiosClient.get(`/product/${productId}`);
  return res.data;
}