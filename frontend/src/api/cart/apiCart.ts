import AxiosClient from "../axios";

export const getCart = async () => {
  const res = await AxiosClient.get("/cart");
  return res.data;
}

export const addToCart = async (productId: number) => {
  const res = await AxiosClient.post("/cart/add", { productId });
  return res.data;
}

export const changeProductFromCart = async (productId: number, value: number) => {
  const res = await AxiosClient.post("/cart/change", { productId, value });
  return res.data;
}

export const removeProductInCart = async (productId: number) => {
  const res = await AxiosClient.post("/cart/delete", { productId });
  return res.data;
}