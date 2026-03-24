import { NextFunction, Request, Response } from "express";
import { User } from "../models/users";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
type QueryType = {
  secret?: string;
};
export const getUsers = async (
  req: Request<{}, {}, {}, QueryType>,
  res: Response,
  next: NextFunction,
) => {
  if (req.query.secret === process.env.QUERY_SECRET) {
    const users = await User.find();
    return res.status(200).send({ message: "suceess", data: users });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

// export function getUserById(req:Request,res:Response){

//     res.send({})
// }

// export function createUser(req:Request<{},{}, createUserDto>,res:Response<User>){

//     res.status(201).send({email:"",id:1,username:""})
// }
