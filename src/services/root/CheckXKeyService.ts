import { client, RootTableEnum } from "../../configurations";

const checkXKeyService = async (xKey: string): Promise<boolean> => {
  let isExist = false;

  const dbClient = await client.connect();
  const cUsers = dbClient
    .db(RootTableEnum.ROOT_TABLE)
    .collection(RootTableEnum.ROOT_AUTH);
  const dbUsers = await cUsers.find({ xKey: xKey }).toArray();

  if (dbUsers.length) {
    isExist = true;
  }

  return isExist;
};

export { checkXKeyService };
