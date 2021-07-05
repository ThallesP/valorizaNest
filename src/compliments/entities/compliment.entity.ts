import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('compliments')
export class Compliment {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_sender: string;

  @Column()
  user_receiver: string;

  @JoinColumn({ name: 'user_sender' })
  @ManyToOne(() => User)
  userSender: User;

  @JoinColumn({ name: 'user_receiver' })
  @ManyToOne(() => User)
  userReceiver: User;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
