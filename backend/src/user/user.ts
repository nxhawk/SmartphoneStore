import {
  CreateUserDetails,
  FindUserOptions,
  FindUserParams,
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
    updateUserInformation: UpdateUserInformation,
  ): Promise<UpdateResult>;
}
