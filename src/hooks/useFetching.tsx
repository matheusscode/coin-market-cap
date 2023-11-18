import { AxiosRequestConfig } from "axios";
import { api } from "../config/api";
import { useState, useEffect } from "react";

export default function useFetch<T = unknown>(
  url: string,
  options?: AxiosRequestConfig
) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api
      .get(url, options)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { data, isFetching, error };
}