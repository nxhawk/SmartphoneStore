import {
  CreateUserDetails,
  FindUserOptions,
  FindUserParams,
} from 'src/utils/types';
import { User } from './entities/user.entity';

export interface IUserService {
  createUser(createUserDetails: CreateUserDetails);
  findUser(
    findUserParams: FindUserParams,
    options?: FindUserOptions,
  ): Promise<User>;
}
