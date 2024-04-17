import { IsNotEmpty, Length } from 'class-validator';

export class UpdateProfileDto {
  @IsNotEmpty({ message: 'name is required' })
  name: string;

  @IsNotEmpty({ message: 'phoneNumber is required' })
  @Length(10, 10, { message: 'phoneNumber must have 10 characters' })
  phoneNumber: string;

  avatar: string;
}
