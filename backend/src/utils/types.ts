export type CreateUserDetails = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
};

export type ValidateUserDetails = {
  email: string;
  password: string;
};

export type FindUserParams = Partial<{
  userId: number;
  email: string;
}>;

export type FindUserOptions = Partial<{
  selectAll: boolean;
}>;
