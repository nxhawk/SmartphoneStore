import { IsNotEmpty, IsNumber } from 'class-validator';

export class AddToCartDto {
  @IsNotEmpty({ message: 'productId is required' })
  @IsNumber({}, { message: 'productId is a number' })
  productId: number;
}
