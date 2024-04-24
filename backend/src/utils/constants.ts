import { MulterField } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

export enum Routes {
  AUTH = 'auth',
  PRODUCT = 'product',
  COMMENT = 'comment',
  CART = 'cart',
  PAYMENT = 'payment',
}

export enum Services {
  AUTH = 'AUTH_SERVICE',
  USERS = 'USERS_SERVICE',
  CLOUDINARY_SERVICE = 'CLOUDINARY_SERVICE',
  IMAGE_UPLOAD_SERVICE = 'IMAGE_UPLOAD_SERVICE',
  SEND_MAIL_SERVICE = 'SEND_MAIL_SERVICE',
  PRODUCT_SERVICE = 'PRODUCT_SERVICE',
  PRODUCT_DETAIL_SERVICE = 'PRODUCT_DETAIL_SERVICE',
  PRODUCT_TYPE_SERVICE = 'PRODUCT_TYPE_SERVICE',
  COMMENT_SERVICE = 'COMMENT_SERVICE',
  CART_SERVICE = 'CART_SERVICE',
  VNPAY_SERVICE = 'VNPAY_SERVICE',
  PAYPAL_SERVICE = 'PAYPAL_SERVICE',
}

export const UserProfileFileFields: MulterField[] = [
  {
    name: 'banner',
    maxCount: 1,
  },
  {
    name: 'avatar',
    maxCount: 1,
  },
];
