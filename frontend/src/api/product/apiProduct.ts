import { filterProps } from "../../pages/AllProduct";
import { convertFilterParams } from "../../utils/helper";
import AxiosClient from "../axios";

export const getAllProduct = async (filter: filterProps[] | undefined) => {
  const res = await AxiosClient.get(`/product/all${convertFilterParams(filter)}`);
  return res.data;
}