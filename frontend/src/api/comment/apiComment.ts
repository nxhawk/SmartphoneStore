import AxiosClient from "../axios";

export const getCommentsByProductId = async (productId: string|undefined, page: number = 1, star: number[]) => {
  let params = '';
  star.forEach(s=>{
    params += '&star='+s
  })
  const res = await AxiosClient.get(`/comment/${productId}?page=${page}${params}`);
  return res.data;
}
