import { Injectable } from '@nestjs/common';
import { IUserService } from './user';
import {
  CreateUserDetails,
  FindUserOptions,
  FindUserParams,
} from 'src/utils/types';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAlreadyExists } from './exceptions/UserAlreadyExists';
import { hashPassword } from 'src/utils/helpers';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
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
    ];
    const selectionsWithPassword: (keyof User)[] = [...selections, 'password'];
    return this.userRepository.findOne({
      where: params,
      select: options?.selectAll ? selectionsWithPassword : selections,
    });
  }
}
