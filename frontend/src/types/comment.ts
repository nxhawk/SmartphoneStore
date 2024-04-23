export interface IComment {
  commentId?: number;
  name: string;
  content: string;
  rate: number;
  date?: string;
}

export interface CommentForm {
  comment: IComment;
  productId: number;
}