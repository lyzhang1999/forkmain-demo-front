// current env
import http from "../utils/axios";



export const getEnv = (): Promise<string> => {
  return http.get(`/env`);
};