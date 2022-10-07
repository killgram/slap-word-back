import { Request, Response } from "express";
import { getUserDataService } from "../services";

const signIn = async (req: Request, res: Response) => {
  const { login, password } = req.query;
  if (!login || !password) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }

  const userData = await getUserDataService(String(login), String(password));

  res.status(200).send(userData);
};

export { signIn };
