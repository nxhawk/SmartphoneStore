import { filterProps } from "../../pages/AllProduct";
import { convertFilterParams } from "../../utils/helper";
import AxiosClient from "../axios";

export const getAllProduct = async (filter: filterProps[] | undefined, page: number) => {
  const res = await AxiosClient.get(`/product/all${convertFilterParams(filter, page)}`);
  return res.data;
}