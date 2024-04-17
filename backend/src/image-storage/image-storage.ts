import { UploadImageParams } from '../utils/types';

export interface IImageStorageService {
  upload(params: UploadImageParams);
  destroy(public_id: string);
}
