import { AuthEnum, client, Constants } from "../configurations";

const getTopScoreListService = async () => {
  const dbClient = await client.connect();
  const cUsers = dbClient.db(AuthEnum.AUTH).collection(AuthEnum.USER_LIST);
  const dbUsers = await cUsers
    .find({})
    .limit(Constants.topUsersLimit)
    .sort({ maxScore: -1 })
    .toArray();
  return dbUsers.map((item) => {
    return {
      name: item.login,
      maxScore: item.maxScore,
    };
  });
};

export { getTopScoreListService };
