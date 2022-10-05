import { Request, Response } from "express";

/**
 * @description API for getting the status of the service
 * @param {Request} req
 * @param {Response} res
 */

const getWorkStatus = (req: Request, res: Response) => {
  res.status(200).send({
    title: "Slap-word-back is working correctly",
    success: true,
  });
};

export { getWorkStatus };
