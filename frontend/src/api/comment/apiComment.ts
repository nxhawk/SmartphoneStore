import AxiosClient from "../axios";

export const getCommentsByProductId = async (productId: string|undefined, page: number = 1) => {
  const res = await AxiosClient.get(`/comment/${productId}?page=${page}`);
  return res.data;
}
