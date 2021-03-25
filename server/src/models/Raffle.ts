import { Entity, Column, UpdateDateColumn, CreateDateColumn, PrimaryColumn } from 'typeorm';

@Entity('raffles')
export class Raffle {

  @PrimaryColumn()
  id: string;

  @Column()
  result: string;

  @Column()
  min: number;

  @Column()
  max: number;

  @UpdateDateColumn()
  updated_At: Date;

  @CreateDateColumn()
  created_At: Date;

}

export default Raffle;