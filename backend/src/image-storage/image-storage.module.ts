import { Module } from '@nestjs/common';
import { ImageStorageService } from './image-storage.service';
import { Services } from 'src/utils/constants';
import { CloudinaryService } from './cloudinary.service';

@Module({
  providers: [
    {
      provide: Services.CLOUDINARY_SERVICE,
      useClass: CloudinaryService,
    },
    {
      provide: Services.IMAGE_UPLOAD_SERVICE,
      useClass: ImageStorageService,
    },
  ],
  exports: [
    {
      provide: Services.CLOUDINARY_SERVICE,
      useClass: CloudinaryService,
    },
    {
      provide: Services.IMAGE_UPLOAD_SERVICE,
      useClass: ImageStorageService,
    },
  ],
})
export class ImageStorageModule {}
