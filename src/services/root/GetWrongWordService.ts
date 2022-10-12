import { client, Constants, WrongWordEnum } from "../../configurations";

const getWrongWordService = async () => {
  const dbClient = await client.connect();
  const cUsers = dbClient
    .db(WrongWordEnum.WRONG_WORD)
    .collection(WrongWordEnum.USER_SUGGESTIONS);
  const dbUsers = await cUsers
    .find({})
    .limit(Constants.topUsersLimit)
    .toArray();
  return dbUsers.map((item) => {
    return {
      word: item.word,
      length: item.length,
      update: item.update,
    };
  });
};

export { getWrongWordService };
