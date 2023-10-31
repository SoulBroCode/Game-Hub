import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "fafb9006bdfc4a11b9cc56fa25200c93" },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (requestConfig?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, { ...requestConfig })
      .then((res) => res.data);
  };

  post = (data: FetchResponse<T>, requestConfig?: AxiosRequestConfig) => {
    return axiosInstance
      .post<FetchResponse<T>>(this.endpoint, data, { ...requestConfig })
      .then((res) => res.data);
  };
}

export default APIClient;
