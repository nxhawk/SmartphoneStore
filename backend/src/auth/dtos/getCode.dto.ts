import { IsEmail } from 'class-validator';

export class GetCodeDto {
  @IsEmail({}, { message: 'email is required' })
  email: string;
}
