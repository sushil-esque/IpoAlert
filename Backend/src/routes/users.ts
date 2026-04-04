import { Router } from "express";
import { changeSubscription, getUsers } from "../controllers/users";
import { protect } from "../middlewares/authHandler";

const router = Router();
router.get("/getUsers", getUsers);
router.put("/updateSubscription",protect, changeSubscription )

export  default router