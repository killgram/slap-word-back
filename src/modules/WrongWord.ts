import { Request, Response } from "express";
import { setWrongWordService, DiscordService } from "../services";

const wrongWord = async (req: Request, res: Response) => {
  const { word } = req.body;

  if (!word) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }
  await setWrongWordService(word);

  await DiscordService.sendWrongWord(word);

  res.status(200).send({
    title: "successfully added",
    success: true,
  });
};

export { wrongWord };
