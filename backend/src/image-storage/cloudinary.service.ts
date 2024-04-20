import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import * as streamifier from 'streamifier';

@Injectable()
export class CloudinaryService {
  constructor() {
    v2.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadImage(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream(
        { folder: 'smartphone-shop' },
        (error, result) => {
          if (error) reject(error);
          resolve(result);
        },
      );
      console.log('upload', file.buffer);
      streamifier.createReadStream(file.buffer).pipe(upload);
    });
  }

  async destroyImage(public_id: string) {
    if (public_id.length == 0) return null;
    return await v2.uploader.destroy(public_id);
  }
}
