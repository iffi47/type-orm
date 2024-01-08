import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Tweets } from "./Tweet";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @OneToMany((type) => Tweets, (tweets) => tweets.user)
  tweets: Tweets[];
}
