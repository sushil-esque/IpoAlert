import { NextFunction, Request, Response } from "express";
import { Ipos } from "../models/ipos";
import { customError } from "../utils/customErrorClass";
import { asyncHandler } from "../middlewares/asyncHandler";
import { QueryType } from "../types/queryType";

export const getCurrentIpos = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // const today = new Date();
    // today.setHours(0, 0, 0, 0);
    // console.log(today, "today");
    // console.log(today.toISOString(), "today iso");
    // const currentIpos = await Ipos.find({
    //   openDate: { $lte: today },
    //   closeDate: { $gte: today },
    // });
    const now = new Date();
    const todayUTC = new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
    );
    console.log(now, "now");
    console.log(todayUTC, "todayUTC");
    const currentIpos = await Ipos.find({
      openDate: { $lte: todayUTC },
      closeDate: { $gte: todayUTC },
    });
    return res.status(200).send({ message: "success", data: currentIpos });
  },
);

// export const updateStatus = asyncHandler<{}, {}, {}, QueryType>(
//   async (req, res, next) => {
//     if (req.query.secret !== process.env.QUERY_SECRET) {
//       return res.status(401).send({ message: "Unauthorized" });
//     }
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
//     await Ipos.updateMany(
//       { status: "open", closeDate: { $lte: today } },
//       { $set: { status: "closed" } },
//     );
//     return res.send("ipo status updated succesfully");
//   },
// );
