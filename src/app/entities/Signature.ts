import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";

@Entity()
export class Signature {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Plan, id_plan => plan.signature)
  id_plan: string;

  @Column()
  id_user: string;

  @Column()
  registration_date: string;

  @Column()
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
