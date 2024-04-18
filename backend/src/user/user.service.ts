import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from './user';
import {
  CreateUserDetails,
  FindUserOptions,
  FindUserParams,
  UpdatePassword,
  UpdateUserInformation,
} from 'src/utils/types';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { UserAlreadyExists } from './exceptions/UserAlreadyExists';
import { compareHash, hashPassword } from 'src/utils/helpers';
import { Services } from 'src/utils/constants';
import { IImageStorageService } from 'src/image-storage/image-storage';
import { InvalidCredentials } from 'src/auth/exceptions/InvalidCredentials';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @Inject(Services.IMAGE_UPLOAD_SERVICE)
    private readonly imageStorageService: IImageStorageService,
  ) {}

  async createUser(userDetails: CreateUserDetails) {
    const existingUser = await this.userRepository.findOneBy({
      email: userDetails.email,
    });

    if (existingUser) throw new UserAlreadyExists();
    const hashedPassword = await hashPassword(userDetails.password);

    const params = {
      ...userDetails,
      password: hashedPassword,
      avatar: 'https://ui-avatars.com/api/?name=No+Name',
    };

    const newUser = this.userRepository.create(params);
    return this.userRepository.save(newUser);
  }

  async findUser(
    params: FindUserParams,
    options?: FindUserOptions,
  ): Promise<User> {
    const selections: (keyof User)[] = [
      'email',
      'name',
      'phoneNumber',
      'avatar',
      'public_id',
      'gender',
      'userId',
    ];
    const selectionsWithPassword: (keyof User)[] = [...selections, 'password'];
    return this.userRepository.findOne({
      where: params,
      select: options?.selectAll ? selectionsWithPassword : selections,
    });
  }

  async updateProfile(
    user: User,
    file: Express.Multer.File,
    updateUserInformation: UpdateUserInformation,
  ): Promise<UpdateResult> {
    const getUser = await this.findUser(
      { email: user.email },
      { selectAll: true },
    );
    user.phoneNumber = updateUserInformation.phoneNumber;
    user.name = updateUserInformation.name;
    user.password = getUser.password;
    if (file !== undefined) {
      await this.imageStorageService.destroy(user.public_id);
      const res = await this.imageStorageService.upload({ file });
      user.avatar = res.url;
      user.public_id = res.public_id;
    }
    return this.userRepository.update({ email: user.email }, user);
  }

  async updatePassword(
    user: User,
    updatePasswordData: UpdatePassword,
  ): Promise<UpdateResult> {
    const getUser = await this.findUser(
      { email: user.email },
      { selectAll: true },
    );
    const isPasswordValid = await compareHash(
      updatePasswordData.oldPassword,
      getUser.password,
    );

    if (!isPasswordValid) throw new InvalidCredentials();
    const hashedPassword = await hashPassword(updatePasswordData.newPassword);
    user.password = hashedPassword;

    return this.userRepository.update({ email: user.email }, user);
  }
}
