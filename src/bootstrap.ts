import { User } from "./entity/User";
import { AppDataSource } from "./data-source";
import { Tweets } from "./entity/Tweet";

export const Bootstrap = async () => {
  const userRepo = AppDataSource.getRepository(User);
  console.log(userRepo, "this is user repository");

  const user = userRepo.create({
    firstName: "Alex",
    lastName: "Ali",
    age: 45,
  });
  console.log(user);
  let userSave = await userRepo.save(user).catch((err) => {
    console.log(err);
  });
  console.log(userSave);

  console.log("New user Saved", user);

  const tweetRepo = AppDataSource.getRepository(Tweets);
  const tweet = new Tweets();
  tweet.title = "PTI Hangouts";
  tweet.content = "asdafsdfsldklsdfjkajkfjsklkjf";
  tweet.user = user;

  await tweetRepo.save(tweet).catch((err) => {
    console.log(err);
  });
};
