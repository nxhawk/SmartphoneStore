import axios from "axios";
export * as userApi from "../user/apiUser";

const AxiosClient = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
  headers: {
    Accept: "application/json",
  },
})

export default AxiosClient;