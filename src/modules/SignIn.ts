import { Request, Response } from "express";
import { getUserDataService, DiscordService } from "../services";

const signIn = async (req: Request, res: Response) => {
  const { login, password } = req.query;
  const userData = await getUserDataService(String(login), String(password));
  userData?.accessToken &&
    (await DiscordService.sendAuthUser(userData.login, userData.password));
  res.status(200).send(userData);
};

export { signIn };
