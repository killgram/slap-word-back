import { client } from "../../configurations";
import { RootTableEnum } from "../../configurations";

const getRootXKeyService = async (login: string, password: string) => {
  let data;
  const dbClient = await client.connect();
  const cUsers = dbClient
    .db(RootTableEnum.ROOT_TABLE)
    .collection(RootTableEnum.ROOT_AUTH);
  const dbUser = await cUsers
    .find({ login: login, password: password })
    .toArray();

  if (dbUser.length) {
    data = {
      xKey: dbUser[0].xKey,
      success: true,
    };
  } else {
    data = {
      title: "forbidden",
      success: false,
    };
  }

  return data;
};

export { getRootXKeyService };
