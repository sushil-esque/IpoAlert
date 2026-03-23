import type { IPO } from "@/types/ipo";
import { api } from "./interceptor";

export const getCurrentIpo = async (): Promise<{ message: string; data: IPO[] }> => {
    return await api.get("currentIpos");
};