import { CollectionNumber, DBLists } from "../configurations";

export interface IWordDb {
  dbName: string;
  collectionName: string;
}

type ILength = keyof typeof CollectionNumber;

const getWordDb = (lang: string, length: ILength): IWordDb => {
  // Here you can add a check for another language
  return {
    dbName: DBLists.RU_WORDS_DB,
    collectionName: CollectionNumber[length],
  };
};

export { getWordDb };
