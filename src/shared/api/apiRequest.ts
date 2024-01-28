import axios, {AxiosInstance,} from 'axios';
import { TIMEOUT, BACKEND_URL } from '../constans/requestData';

export const createAPI = () : AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIMEOUT
  });

  return api;
};
