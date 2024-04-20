import { User } from 'src/user/entities/user.entity';
import { ResetPasswordForm, ValidateUserDetails } from 'src/utils/types';
import { UpdateResult } from 'typeorm';
import { CreateGoogleDto } from './dtos/create-user-google.dto';

export interface IAuthService {
  validateUser(userCredentials: ValidateUserDetails): Promise<User | null>;
  validateUserGoogle(details: CreateGoogleDto): Promise<User | null>;
  resetPassword(resetPasswordForm: ResetPasswordForm): Promise<UpdateResult>;
}
