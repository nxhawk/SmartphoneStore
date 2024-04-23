import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './entities/comment.entity';
import { Services } from 'src/utils/constants';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity]), ProductModule],
  controllers: [CommentController],
  providers: [
    {
      provide: Services.COMMENT_SERVICE,
      useClass: CommentService,
    },
  ],
  exports: [
    {
      provide: Services.COMMENT_SERVICE,
      useClass: CommentService,
    },
  ],
})
export class CommentModule {}
