import { Injectable } from '@nestjs/common';
import { IUser } from './user';
import { CreateUserDetails } from 'src/utils/types';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAlreadyExists } from './exceptions/UserAlreadyExists';
import { hashPassword } from 'src/utils/helpers';

@Injectable()
export class UserService implements IUser {
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
}
