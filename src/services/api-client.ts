import axios, { CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  //headers : {"api-key " : ""}
  params: { key: "fafb9006bdfc4a11b9cc56fa25200c93" },
});

export { CanceledError };
