import { Request, Response } from "express";
import { rootService } from "../../services";
import { getWrongWordService } from "../../services/root";

const getWrongWord = async (req: Request, res: Response) => {
  const { xKey } = req.query;
  if (!xKey) {
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

  const data = await getWrongWordService();

  res.status(200).send(data);
};

export { getWrongWord };
