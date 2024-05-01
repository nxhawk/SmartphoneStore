import { Cart } from 'src/cart/entities/cart.entity';
import { CommentEntity } from 'src/comment/entities/comment.entity';
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';

export type CreateUserDetails = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  avatar?: string;
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

export type UpdatePassword = {
  oldPassword: string;
  newPassword: string;
};

export type ResetPasswordForm = {
  password: string;
  code: string;
};

export type IGetProductsResponse = {
  products: Product[];
  perPage: number;
  totalPage: number;
  currentPage: number;
};

export type ICommentData = {
  name: string;
  content: string;
  rate: number;
};

export type ICommentResponse = {
  comments: CommentEntity[];
  totalComments: number;
  perPage: number;
  totalPage: number;
  currentPage: number;
};

export type ICartResponse = {
  carts: Cart[];
  totalCost: number;
};
