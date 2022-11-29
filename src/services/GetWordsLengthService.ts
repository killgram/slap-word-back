import { client, CollectionLists, DBLists } from "../configurations";

const getWordsLengthService = async (): Promise<any> => {
  const dbClient = await client.connect();
  const cWordsLength = dbClient
    .db(DBLists.WORDS_LENGTH)
    .collection(CollectionLists.RU_WORDS_LENGTH);
  return await cWordsLength.find({}, { projection: { _id: 0 } }).toArray();
};

export { getWordsLengthService };
