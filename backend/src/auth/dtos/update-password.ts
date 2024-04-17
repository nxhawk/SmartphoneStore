import { IsNotEmpty, MinLength } from 'class-validator';

export class UpdatePasswordDto {
  @IsNotEmpty({ message: 'oldPasssword is required' })
  @MinLength(8, { message: 'oldPasssword must be at least 8 characters' })
  oldPassword: string;

  @IsNotEmpty({ message: 'oldPasssword is required' })
  @MinLength(8, { message: 'oldPasssword must be at least 8 characters' })
  newPassword: string;
}
