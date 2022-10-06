import { Request, Response } from "express";
import { Constants, LanguageList } from "../configurations";
import { getWordLength } from "../services";

const getWord = async (req: Request, res: Response) => {
  const { language, length } = req.query;
  if (!language || !length) {
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
  if (
    Number(length) < Constants.minWordLength ||
    Number(length) > Constants.maxWordLength
  ) {
    return res.status(200).send({
      title: "length incorrect",
      success: false,
    });
  }

  const word = await getWordLength(String(language), length);
  res.status(200).send({
    word: word,
    success: true,
  });
};

export { getWord };
