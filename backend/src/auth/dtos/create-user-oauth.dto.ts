import { IsEmail } from 'class-validator';

export class CreateOAuthDto {
  name?: string;

  phoneNumber?: string;

  password?: string;

  avatar: string;

  @IsEmail({}, { message: 'email is required' })
  email: string;
}
