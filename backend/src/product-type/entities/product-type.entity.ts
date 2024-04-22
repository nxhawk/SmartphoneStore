import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Type')
export class ProductType {
  @PrimaryGeneratedColumn()
  typeId: number;

  @Column()
  name: string;

  @Column({ default: true })
  active: boolean;
}
