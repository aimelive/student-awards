import axios, { AxiosError } from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api/v1/" });

export class ApiException {
  message: string;
  constructor(error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      let message =
        (axiosError.response?.data as any)?.message ?? "Something went wrong";

      if (Array.isArray(message)) {
        message = (axiosError.response?.data as any)?.message?.join(", ");
      }
      this.message = message;
    } else {
      this.message = error.message || "Something went wrong";
    }
  }

  toString() {
    return this.message;
  }
}

export class Fetcher {
  static async get<T = any>(url: string) {
    try {
      const { data } = await API.get(url);
      return data.data as T;
    } catch (error) {
      throw new ApiException(error);
    }
  }
}
