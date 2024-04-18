import {
  CreateUserDetails,
  FindUserOptions,
  FindUserParams,
  UpdatePassword,
  UpdateUserInformation,
} from 'src/utils/types';
import { User } from './entities/user.entity';
import { UpdateResult } from 'typeorm';

export interface IUserService {
  createUser(createUserDetails: CreateUserDetails);
  findUser(
    findUserParams: FindUserParams,
    options?: FindUserOptions,
  ): Promise<User>;
  updateProfile(
    user: User,
    file: Express.Multer.File,
    updateUserInformation: UpdateUserInformation,
  ): Promise<UpdateResult>;
  updatePassword(
    user: User,
    updatePasswordData: UpdatePassword,
  ): Promise<UpdateResult>;
  resetPassword(user: User, password: string): Promise<UpdateResult>;
}
