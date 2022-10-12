import { Request, Response } from "express";
import { Constants, LanguageList } from "../configurations";
import { getWordService } from "../services";

const getWordOfTheDay = async (req: Request, res: Response) => {
  const { language } = req.query;

  if (!language) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }
  if (!Object.keys(LanguageList).includes(String(language))) {
    return res.status(200).send({
      title: "language incorrect",
      success: false,
    });
  }

  const word = await getWordService(
    String(language),
    Constants.wordOfTheDayLength
  );

  res.status(200).send({
    word: word,
    success: true,
  });
};

export { getWordOfTheDay };
