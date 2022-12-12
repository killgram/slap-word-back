import { Request, Response } from "express";
import {
  getAboutAppService,
  getTopScoreListService,
  getWordsLengthService,
  getWrongWordsService,
} from "../services";

const getHistory = async (req: Request, res: Response) => {
  const aboutApp = await getAboutAppService();
  const totalUser = await getTopScoreListService();
  const wordsLength = await getWordsLengthService();
  const wrongWords = await getWrongWordsService();

  const data = {
    aboutApp: [aboutApp[0]],
    totalUser: totalUser,
    wordsLength: wordsLength,
    wrongWords: wrongWords,
  };

  res.status(200).send(data);
};

export { getHistory };
