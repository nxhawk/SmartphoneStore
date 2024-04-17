import AxiosClient from "../axios";
import { ILoginForm } from "../../types/user";
import { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = { withCredentials: true };

export const login = async (data: ILoginForm) => {
  const res = await AxiosClient.post("/auth/login", data, config);
  return res.data;
}

export const signup = async (data: ILoginForm) => {
  const res = await AxiosClient.post("/auth/register", data, config);
  return res.data;
}

export const getUserProfile = async () =>{
  const res = await AxiosClient.get("/auth/status", config);
  return res.data;
} 

export const logout = async () =>{
  const res = await AxiosClient.post("/auth/logout", {}, config);
  console.log(res.data);
  return res.data;
} 