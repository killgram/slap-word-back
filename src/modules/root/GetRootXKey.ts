import { Request, Response } from "express";
import { rootService } from "../../services";

const getRootXKey = async (req: Request, res: Response) => {
  const { login, password } = req.query;
  if (!login || !password) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }

  const xKey = await rootService.getRootXKeyService(
    String(login),
    String(password)
  );

  res.status(200).send(xKey);
};

export { getRootXKey };