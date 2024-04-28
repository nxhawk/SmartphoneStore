import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class OrderCreateDto {
  @IsNotEmpty({ message: 'address is required' })
  address: string;

  @IsNotEmpty({ message: 'reciverName is required' })
  reciverName: string;

  isPayment: boolean;

  @IsNotEmpty({ message: 'phoneNumber is required' })
  @MinLength(10, { message: 'phoneNumber is at least 10 characters' })
  @MaxLength(10, { message: 'phoneNumber is at most 10 characters' })
  phoneNumber: string;
}
