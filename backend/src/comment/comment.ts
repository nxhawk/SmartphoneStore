import { ICommentData, ICommentResponse } from 'src/utils/types';
import { CommentEntity } from './entities/comment.entity';

export interface IComment {
  countCommentProductById(productId: number): Promise<number>;
  getCommentByProductId(
    productId: number,
    query: any,
  ): Promise<ICommentResponse>;
  createComment(
    productId: number,
    createComment: ICommentData,
  ): Promise<CommentEntity>;
}
