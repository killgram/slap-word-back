import { Request, Response } from "express";
import { LanguageList } from "../configurations";
import { checkWordIsExist } from "../services";

const checkWord = async (req: Request, res: Response) => {
  const { language, word } = req.query;
  if (!language || !word) {
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

  const isWordExist = await checkWordIsExist(
    String(language),
    word.length,
    String(word)
  );

  res.status(200).send(isWordExist);
};

export { checkWord };
