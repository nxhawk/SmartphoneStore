import { IsNotEmpty, IsString } from 'class-validator';

export class VerifyAccountDto {
  @IsString()
  @IsNotEmpty({ message: 'Please enter token' })
  token: string;
}
