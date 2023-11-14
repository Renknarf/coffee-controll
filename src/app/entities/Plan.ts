import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import {
  Signature
} from './Signature';

@Entity()
export class Plan {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column("int")
  price_in_cents: number;

  @Column("int")
  durationMonths: number;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Signature, signature => signature.plan)
  signatures: Signature[];

  @UpdateDateColumn()
  updated_at: Date;
}
