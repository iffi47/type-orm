import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "MyAdmin123@A",
  database: "social_network",
  synchronize: true,
  logging: true,
  entities: ["src/*.entity{.ts,.js}"],
  migrations: ["src/migration/**/*.js"],
});
