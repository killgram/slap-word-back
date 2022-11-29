import { client, WrongWordEnum } from "../configurations";

const getWrongWordsService = async () => {
  const dbClient = await client.connect();
  const cWrongWord = dbClient
    .db(WrongWordEnum.WRONG_WORD)
    .collection(WrongWordEnum.USER_SUGGESTIONS);
  return await cWrongWord.find({}, { projection: { _id: 0 } }).toArray();
};

export { getWrongWordsService };
