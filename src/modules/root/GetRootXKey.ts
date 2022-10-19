import { Request, Response } from "express";
import { rootService } from "../../services";

const getRootXKey = async (req: Request, res: Response) => {
  const { login, password } = req.query;
  const xKey = await rootService.getRootXKeyService(
    String(login),
    String(password)
  );
  res.status(200).send(xKey);
};

export { getRootXKey };
