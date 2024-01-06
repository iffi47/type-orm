import { User } from "./entity/User";
import { AppDataSource } from "./data-source";

export const Bootstrap = async () => {
  const userRepo = AppDataSource.getRepository(User);
  const user = userRepo.create({
    firstName: "Alex",
    lastName: "Ali",
  });
  await userRepo.save(user).catch((err) => {
    console.log(err);
  });
  console.log("New user Saved", user);
};
