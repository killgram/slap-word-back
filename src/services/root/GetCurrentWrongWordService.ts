import { client, WrongWordEnum } from "../../configurations";

const getCurrentWrongWordService = async (word: string) => {
  const dbClient = await client.connect();
  const cUsers = dbClient
    .db(WrongWordEnum.WRONG_WORD)
    .collection(WrongWordEnum.USER_SUGGESTIONS);
  const dbUsers = await cUsers.find({ word: word }).toArray();

  return {
    word: word,
    coincidences: dbUsers.length,
  };
};

export { getCurrentWrongWordService };
