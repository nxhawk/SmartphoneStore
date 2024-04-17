import { IUser } from "../../types/user";

export interface IUserStore {
  token: string;
  user: IUser;
}