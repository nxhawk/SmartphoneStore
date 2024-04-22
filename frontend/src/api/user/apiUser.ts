import AxiosClient from "../axios";
import { ILoginForm, IResetPasswordForm, IUpdatePasswordForm } from "../../types/user";

export const login = async (data: ILoginForm) => {
  const res = await AxiosClient.post("/auth/login", data);
  return res.data;
}

export const signup = async (data: ILoginForm) => {
  const res = await AxiosClient.post("/auth/register", data);
  return res.data;
}

export const logout = async () =>{
  const res = await AxiosClient.post("/auth/logout", {});
  console.log(res.data);
  return res.data;
} 

export const getUserProfile = async () =>{
  const res = await AxiosClient.get("/auth/status");
  return res.data;
} 

export const updateProfile = async (data: FormData) => {
  const res = await AxiosClient.post("/user/profile", data);
  return res.data;
}

export const changePassword = async (data: IUpdatePasswordForm) => {
  const res = await AxiosClient.post("/auth/password", data);
  return res.data;
}

export const getCodeForgotPassword = async (data: string) => {
  const res = await AxiosClient.post("/auth/getCode", {email:data});
  return res.data;
}

export const resetPassword = async (data: IResetPasswordForm) => {
  const res = await AxiosClient.post("/auth/resetPassword", data);
  return res.data;
}

export const verifyAccount = async (data: string) => {
  const res = await AxiosClient.post("/auth/verify", {token: data});
  return res.data;
}