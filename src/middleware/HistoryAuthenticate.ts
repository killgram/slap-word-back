import { Request, Response, NextFunction } from "express";
import { HistoryUtils } from "../utils";

const historyAuthenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    if (HistoryUtils.checkSecureKey(authHeader)) {
      next();
    } else {
      return res.status(200).send({
        title: "forbidden, go away",
        success: false,
        secureKey: false,
      });
    }
  } else {
    return res.status(200).send({
      title: "forbidden",
      success: false,
      secureKey: false,
    });
  }
};

export { historyAuthenticate };
