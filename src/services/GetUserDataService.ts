import { checkExistUserService } from "./CheckExistUserService";
import { AuthEnum, client } from "../configurations";

const getUserDataService = async (login: string, password: string) => {
  let userData;

  const isExist = await checkExistUserService(login);
  if (!isExist) {
    userData = {
      title: "user is not found",
      success: false,
    };
  } else {
    const dbClient = await client.connect();
    const cUsers = dbClient.db(AuthEnum.AUTH).collection(AuthEnum.USER_LIST);
    const dbUser = await cUsers
      .find({ login: login, password: password })
      .toArray();

    if (dbUser.length) {
      userData = {
        login: dbUser[0].login,
        password: dbUser[0].password,
        maxScore: dbUser[0].maxScore,
      };
    } else {
      userData = {
        title: "incorrect login/password",
        success: false,
      };
    }
  }

  return userData;
};

export { getUserDataService };
