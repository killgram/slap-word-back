import { client, AuthEnum } from "../configurations";

const updateScoreService = async (login: string, score: number) => {
  const dbClient = await client.connect();
  const cUsers = dbClient.db(AuthEnum.AUTH).collection(AuthEnum.USER_LIST);
  await cUsers.updateOne(
    { login: login },
    {
      $set: {
        maxScore: score,
      },
    }
  );
};

export { updateScoreService };
