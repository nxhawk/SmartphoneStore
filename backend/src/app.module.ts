import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from 'db/data-source';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { ImageStorageModule } from './image-storage/image-storage.module';
import { SendEmailModule } from './send-email/send-email.module';
import { ProductTypeModule } from './product-type/product-type.module';
import { ProductModule } from './product/product.module';
import { CommentModule } from './comment/comment.module';
import { CartModule } from './cart/cart.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      load: [configuration],
    }),
    PassportModule.register({ session: true }),
    // TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    UserModule,
    AuthModule,
    ImageStorageModule,
    SendEmailModule,
    ProductTypeModule,
    ProductModule,
    CommentModule,
    CartModule,
    PaymentModule,
  ],
  providers: [],
})
export class AppModule {}
