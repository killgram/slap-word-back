import { Request, Response } from "express";
import { getUserDataService } from "../services";
import { updateScoreService } from "../services";

const updateScore = async (req: Request, res: Response) => {
  const { login, password, score } = req.body;
  if (typeof score === "undefined") {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }
  const userData = await getUserDataService(String(login), String(password));
  if (!userData.password && !userData.login) {
    return res.status(200).send(userData);
  }
  const dbMaxScore = userData.maxScore;
  if (Number(score) > Number(dbMaxScore)) {
    await updateScoreService(login, score);
  }
  res.status(200).send({
    success: true,
  });
};

export { updateScore };
