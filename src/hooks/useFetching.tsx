import { AxiosRequestConfig } from "axios";
import { api } from "../config/api";
import { useState, useEffect } from "react";

export default function useFetch<T = unknown>(
  url: string,
  options?: AxiosRequestConfig
) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let debounceTimer: number;

    const fetchData = async () => {
      try {
        const response = await api.get(url, options);
        setData(response.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsFetching(false);
      }
    };

    const handleFetch = () => {
      clearTimeout(debounceTimer);
      debounceTimer = window.setTimeout(fetchData, 1000);
    };

    handleFetch();

    return () => clearTimeout(debounceTimer);
  }, [url, options]);

  return { data, isFetching, error };
}
