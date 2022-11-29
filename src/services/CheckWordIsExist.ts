import { CheckWordsEnum, client } from "../configurations";

const checkWordIsExist = async (
  language: string,
  word: string
): Promise<boolean> => {
  let isExist = false;
  const dbName = CheckWordsEnum.CHECK_WORDS_TABLE;
  const collectionName = CheckWordsEnum.CHECK_WORDS_DATA;

  const dbClient = await client.connect();
  const cWordsDb = dbClient.db(dbName).collection(collectionName);
  const dbWord = await cWordsDb.find({ item: word }).toArray();

  if (dbWord.length) {
    isExist = true;
  }

  return isExist;
};

export { checkWordIsExist };
