import { Bootstrap } from "./bootstrap";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // console.log(user);
    // console.log(User);

    // const saveUser = await AppDataSource.manager.save(user);
    // console.log(saveUser);
    // console.log(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await AppDataSource.manager.find(User);
    // console.log("Loaded users: ", users);

    // console.log(
    //   "Here you can setup and run express / fastify / any other framework."
    // );

    Bootstrap().catch((err) => {
      console.log(err);
    });
  })
  .catch((error) => console.log(error));
