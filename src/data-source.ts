import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Tweets } from "./entity/Tweet";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "MyAdmin123@A",
  database: "social_network",
  synchronize: true,
  logging: true,
  entities: [User, Tweets],
  migrations: ["src/migration/**/*.js"],
});
