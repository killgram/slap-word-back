import { client, CollectionLists, DBLists } from "../configurations";
import { getRandomNumber, getWordDb } from "../utils";

const getWordService = async (
  language: string,
  length: any
): Promise<string> => {
  const enumDb = getWordDb(language, length);
  const dbName = enumDb.dbName;
  const collectionName = enumDb.collectionName;
  let maxDbLength = 0;
  const dbClient = await client.connect();
  const cWordsLength = dbClient
    .db(DBLists.WORDS_LENGTH)
    .collection(CollectionLists.RU_WORDS_LENGTH);
  const dbLength = await cWordsLength.find({}).toArray();
  dbLength.forEach((item) => {
    if (item[collectionName]) {
      maxDbLength = item[collectionName];
    }
  });
  const randomWordIndex = getRandomNumber(0, maxDbLength - 1);
  const cWordDb = dbClient.db(dbName).collection(collectionName);
  const wordObj = await cWordDb.find({ index: randomWordIndex }).toArray();

  return wordObj[0].item;
};

export { getWordService };
