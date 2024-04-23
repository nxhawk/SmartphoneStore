import { Inject, Injectable } from '@nestjs/common';
import { IComment } from './comment';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentEntity } from './entities/comment.entity';
import { In, Repository } from 'typeorm';
import { ICommentResponse } from 'src/utils/types';
import { Services } from 'src/utils/constants';
import { IProduct } from 'src/product/interfaces/product';
import { ProductNotFound } from 'src/product/exceptions/ProductNotFound';

@Injectable()
export class CommentService implements IComment {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>,
    @Inject(Services.PRODUCT_SERVICE)
    private readonly productService: IProduct,
  ) {}

  async countCommentProductById(productId: number): Promise<number> {
    return this.commentRepository
      .createQueryBuilder('cmt')
      .where('cmt.productId = :id', { id: productId })
      .getCount();
  }

  async getCommentByProductId(
    productId: number,
    query: any,
  ): Promise<ICommentResponse> {
    const perPage = Number(query['perPage']) || 4;
    const currentPage = Number(query['page']) || 1;

    const product = await this.productService.getById(productId + '');
    if (!product) throw new ProductNotFound();

    const [comments, totalComments] = await this.commentRepository.findAndCount(
      {
        where: {
          product: product.productId,
          rate: Array.isArray(query['star'])
            ? In([...query['star']])
            : query['star'],
        },
        skip: (currentPage - 1) * perPage,
        take: perPage,
      },
    );

    const totalPage =
      Math.floor(totalComments / perPage) +
      (totalComments % perPage > 0 ? 1 : 0);

    const response: ICommentResponse = {
      totalComments,
      perPage,
      totalPage,
      currentPage,
      comments,
    };

    return response;
  }
}
