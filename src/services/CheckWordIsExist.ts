import { client } from "../configurations";
import { getWordDb } from "../utils";

const checkWordIsExist = async (
  language: string,
  length: any,
  word: string
): Promise<boolean> => {
  let isExist = false;
  const enumDb = getWordDb(language, length);
  const dbName = enumDb.dbName;
  const collectionName = enumDb.collectionName;

  const dbClient = await client.connect();
  const cWordsDb = dbClient.db(dbName).collection(collectionName);
  const dbWord = await cWordsDb.find({ item: word }).toArray();

  if (dbWord.length) {
    isExist = true;
  }

  return isExist;
};

export { checkWordIsExist };
