import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  type: string;
}
