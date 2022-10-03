import axios from "axios";
import env from '../config/environmentConfig';

export const fetch = axios.create({
    baseURL: env.apiEndPoint,
    timeout: 6000,
    withCredentials: true,
})