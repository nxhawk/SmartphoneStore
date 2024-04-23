import { ICommentResponse } from 'src/utils/types';

export interface IComment {
  countCommentProductById(productId: number): Promise<number>;
  getCommentByProductId(
    productId: number,
    query: any,
  ): Promise<ICommentResponse>;
}
