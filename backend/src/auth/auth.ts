import { User } from 'src/user/entities/user.entity';
import { ResetPasswordForm, ValidateUserDetails } from 'src/utils/types';
import { UpdateResult } from 'typeorm';

export interface IAuthService {
  validateUser(userCredentials: ValidateUserDetails): Promise<User | null>;
  resetPassword(resetPasswordForm: ResetPasswordForm): Promise<UpdateResult>;
}
