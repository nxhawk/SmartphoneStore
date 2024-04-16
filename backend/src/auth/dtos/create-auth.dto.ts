import { IsEmail, IsNotEmpty, Length, MinLength } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty({ message: 'name is required' })
  name: string;

  @IsNotEmpty({ message: 'phoneNumber is required' })
  @Length(10, 10, { message: 'phoneNumber must have 10 characters' })
  phoneNumber: string;

  @IsEmail({}, { message: 'email is required' })
  email: string;

  @IsNotEmpty({ message: 'passsword is required' })
  @MinLength(8, { message: 'passsword must be at least 8 characters' })
  password: string;
}
