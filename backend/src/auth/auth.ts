import { User } from 'src/user/entities/user.entity';
import { ValidateUserDetails } from 'src/utils/types';

export interface IAuthService {
  validateUser(userCredentials: ValidateUserDetails): Promise<User | null>;
}
