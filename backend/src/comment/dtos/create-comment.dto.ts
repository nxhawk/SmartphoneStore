import { IsNotEmpty, Max, Min } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty({ message: 'name is required' })
  name: string;

  @IsNotEmpty({ message: 'content is required' })
  content: string;

  @IsNotEmpty({ message: 'rate is required' })
  @Min(1, { message: 'rate is range 1 to 5' })
  @Max(5, { message: 'rate is range 1 to 5' })
  rate: number;
}
