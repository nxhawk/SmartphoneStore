import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('VerifyCode')
export class VerifyCode {
  @PrimaryGeneratedColumn()
  codeId: number;

  @Column()
  token: string;
}
