import { User } from "./entity/User";
import { AppDataSource } from "./data-source";
import { Tweets } from "./entity/Tweet";

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

  const tweetRepo = AppDataSource.getRepository(Tweets);
  const tweet = new Tweets();
  tweet.title = "PTI Hangouts";
  tweet.content = "asdafsdfsldklsdfjkajkfjsklkjf";
};
