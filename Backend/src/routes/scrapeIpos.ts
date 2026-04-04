import { Router } from "express";
import { addIpos } from "../utils/scrapeIpo";

const router = Router();

router.post("/cron/scrapeIpos",  addIpos);
export default router;
