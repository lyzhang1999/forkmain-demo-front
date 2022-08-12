import axios, {AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse} from 'axios';

export const baseURL = import.meta.env.VITE_PUBLIC_DOMAIN
console.log('[ baseURL ] >', baseURL)

export const http = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});

http.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
}, err => {
  return Promise.reject(err);
})

http.interceptors.response.use((res: AxiosResponse) => {
  let {data} = res;
  return data;
}, (err) => {
  return Promise.reject(err);
})

export default http;
