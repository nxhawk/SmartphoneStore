import { Inject, Injectable } from '@nestjs/common';
import { IImageStorageService } from './image-storage';
import { Services } from 'src/utils/constants';
import { UploadImageParams } from 'src/utils/types';

@Injectable()
export class ImageStorageService implements IImageStorageService {
  constructor(
    @Inject(Services.CLOUDINARY_SERVICE) private readonly cloudinaryService,
  ) {}

  destroy(public_id: string) {
    return this.cloudinaryService.destroyImage(public_id);
  }

  upload(params: UploadImageParams) {
    return this.cloudinaryService.uploadImage(params.file);
  }
}
