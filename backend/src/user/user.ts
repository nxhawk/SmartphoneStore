import { CreateUserDetails } from 'src/utils/types';
import { User } from './entities/user.entity';

export interface IUser {
  createUser(createUserDetails: CreateUserDetails);
}
