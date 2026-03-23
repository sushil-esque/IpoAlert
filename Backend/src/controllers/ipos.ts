import { NextFunction, Request, Response } from "express";
import { Ipos } from "../models/ipos";
import { customError } from "../utils/customErrorClass";
import { asyncHandler } from "../middlewares/asyncHandler";

export const getCurrentIpos = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const currentIpos = await Ipos.find({
      openDate: { $lte: today },
      closeDate: { $gte: today },
    });
    return res.status(200).send({ message: "success", data: currentIpos });
  },
);
