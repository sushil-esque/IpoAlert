import { Router } from "express";
import { sendMailsByGoogle } from "../controllers/sendMails";

const router = Router();

router.post("/cron/sendMails", sendMailsByGoogle)


export default router