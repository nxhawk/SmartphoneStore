import { Exclude } from 'class-transformer';
import { Cart } from 'src/cart/entities/cart.entity';
import { ForgotCode } from 'src/send-email/entities/forgot-code.entity';
import { Roles } from 'src/utils/enums/roles.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  name: string;

  @Column()
  phoneNumber: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  @Exclude()
  password: string;

  @Column()
  avatar: string;

  @Column({ nullable: true })
  public_id: string;

  @Column({ default: true })
  gender: boolean;

  @Column({ type: 'enum', enum: Roles, default: Roles.USER })
  role: Roles;

  @Column({ default: false })
  active: boolean;

  @CreateDateColumn()
  timeJoined: Timestamp;

  @CreateDateColumn()
  lastOnline: Timestamp;

  // relationship
  @OneToOne(() => ForgotCode, (fc) => fc.user)
  forgotCode: ForgotCode;

  @OneToMany(() => Cart, (c) => c.userId)
  cart: Cart[];
}
