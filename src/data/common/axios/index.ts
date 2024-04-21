import axios from "axios";

const api = axios.create({
  baseURL: '',
  withCredentials: false,
});

api.interceptors.request.use(config => {
    config.headers['Access-Control-Allow-Credentials'] = true
    config.headers["Content-Type"] = 'application/json'
    return config;
}, error => Promise.reject(error));

export { api }
