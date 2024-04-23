import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class ChangeNumberOfProductDto {
  @IsNotEmpty({ message: 'productId is required' })
  @IsNumber({}, { message: 'productId is a number' })
  productId: number;

  @IsNotEmpty({ message: 'value is required' })
  @IsNumber({}, { message: 'value is a number' })
  @Min(-1, { message: 'value is -1 or 1' })
  @Max(1, { message: 'value is -1 or 1' })
  value: number;
}
