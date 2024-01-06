import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
  name: "tweets",
})
export class Tweets {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  content: string;
}
