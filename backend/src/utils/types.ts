import { User } from 'src/user/entities/user.entity';

export type CreateUserDetails = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
};

export type UpdateUserInformation = {
  name: string;
  phoneNumber: string;
  avatar?: string;
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

export interface AuthenticatedRequest extends Request {
  user: User;
}

export type UserProfileFiles = Partial<{
  avatar: Express.Multer.File[];
}>;

export type UploadImageParams = {
  file: Express.Multer.File;
};
