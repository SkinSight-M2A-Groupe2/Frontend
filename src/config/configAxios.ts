import axios from "axios";

const ApiConfig = {
    baseURL: process.env.REACT_APP_BACKEND_API_URL,
};

    
export const configAxios = axios.create(
    ApiConfig,
  )