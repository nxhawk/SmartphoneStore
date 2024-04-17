export interface IUser {
  name: string;
  phoneNumber: string;
  email: string;
  avatar: string;
  public_id: string;
  gender: boolean;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface IUpdatePasswordForm {
  oldPassword: string;
  newPassword: string;
}
