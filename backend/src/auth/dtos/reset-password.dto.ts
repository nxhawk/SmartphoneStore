import { IsNotEmpty, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @IsNotEmpty({ message: 'passsword is required' })
  @MinLength(8, { message: 'passsword must be at least 8 characters' })
  password: string;

  @IsNotEmpty({ message: 'code is required' })
  code: string;
}
