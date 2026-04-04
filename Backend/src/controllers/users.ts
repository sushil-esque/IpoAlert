import { NextFunction, Request, Response } from "express";
import { User } from "../models/users";
import { QueryType } from "../types/queryType";
import { asyncHandler } from "../middlewares/asyncHandler";
import { subscriptionSchema } from "../zodSchema";

export const getUsers = async (
  req: Request<{}, {}, {}, QueryType>,
  res: Response,
  next: NextFunction,
) => {
  if (req.query.secret === process.env.QUERY_SECRET) {
    const users = await User.find();
    return res.status(200).send({ message: "suceess", data: users });
  } else {
    res.status(401).send({ message: "Unauthorized" });
  }
};

export const changeSubscription = asyncHandler(
  async (req: Request, res: Response) => {
    const validatedBody = subscriptionSchema.parse(req.body);

    await User.findByIdAndUpdate(req.user?.id, {
      subscribedCategory: validatedBody.name,
    });
    
    return res.status(200).send({
      message: "subscription updated successfully",
    });
  },
);
