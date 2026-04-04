import { api } from "./interceptor";

export const updateSubscription = async (name: string) => {
  const response = await api.put("/updateSubscription", { name });
  return response.data;
};
