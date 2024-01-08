import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity({
  name: "tweets",
})
export class Tweets {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "varchar", length: 80 })
  title: string;
  @Column({ type: "varchar", length: 300 })
  content: string;

  @ManyToOne((type) => User, (user) => user.tweets)
  user: User;
}
