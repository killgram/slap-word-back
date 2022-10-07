import { Request, Response } from "express";
import { getTopScoreListService } from "../services";

const getTopScoreUsers = async (req: Request, res: Response) => {
  const list = await getTopScoreListService();
  res.status(200).send({
    list: list,
    success: true,
  });
};

export { getTopScoreUsers };
