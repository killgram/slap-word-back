import { client, WrongWordEnum } from "../configurations";

const setWrongWordService = async (word: string) => {
  const dbClient = await client.connect();
  const cWrongWord = dbClient
    .db(WrongWordEnum.WRONG_WORD)
    .collection(WrongWordEnum.USER_SUGGESTIONS);
  await cWrongWord.insertOne({
    word: word,
    length: word.length,
    update: Date.now(),
  });
};

export { setWrongWordService };
