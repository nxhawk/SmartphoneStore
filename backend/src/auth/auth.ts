import { User } from 'src/user/entities/user.entity';
import { ResetPasswordForm, ValidateUserDetails } from 'src/utils/types';
import { UpdateResult } from 'typeorm';
import { CreateOAuthDto } from './dtos/create-user-oauth.dto';

export interface IAuthService {
  validateUser(userCredentials: ValidateUserDetails): Promise<User | null>;
  validateUserOAuth(details: CreateOAuthDto): Promise<User | null>;
  resetPassword(resetPasswordForm: ResetPasswordForm): Promise<UpdateResult>;
}
