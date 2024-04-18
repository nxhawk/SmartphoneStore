import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('ForgotCode')
export class ForgotCode {
  @PrimaryGeneratedColumn()
  codeId: number;

  @Column()
  code: string;

  // relationship
  @OneToOne(() => User, (user) => user.forgotCode)
  @JoinColumn({
    name: 'userId',
  })
  userId: User;
}
