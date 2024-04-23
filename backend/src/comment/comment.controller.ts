import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IComment } from './comment';
import { AuthenticatedGuard } from 'src/auth/utils/Guards';
import { CreateCommentDto } from './dtos/create-comment.dto';

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

  @Post('/:productId')
  @UseGuards(AuthenticatedGuard)
  async addNewComment(
    @Body() createCommentDto: CreateCommentDto,
    @Param() { productId },
  ) {
    return this.commentService.createComment(productId, createCommentDto);
  }
}
