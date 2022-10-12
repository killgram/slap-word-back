import { Request, Response } from "express";
import { rootService } from "../../services";
import { getCurrentWrongWordService } from "../../services/root";

const getCurrentWrongWord = async (req: Request, res: Response) => {
  const { xKey, word } = req.query;
  if (!xKey || !word) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }
  const isExist = await rootService.checkXKeyService(String(xKey));
  if (!isExist) {
    return res.status(200).send({
      title: "forbidden",
      success: false,
    });
  }

  const data = await getCurrentWrongWordService(String(word));

  res.status(200).send(data);
};

export { getCurrentWrongWord };
