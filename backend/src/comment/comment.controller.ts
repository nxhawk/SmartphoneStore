import { Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IComment } from './comment';

@Controller(Routes.COMMENT)
export class CommentController {
  constructor(
    @Inject(Services.COMMENT_SERVICE)
    private readonly commentService: IComment,
  ) {}

  @Get('/:productId')
  async getCommentByProductId(@Param() { productId }, @Query() query) {
    return await this.commentService.getCommentByProductId(productId, query);
  }
}
