import { useMutation } from "@tanstack/react-query";
import { FetchData } from "../types/fetch";

const API_URL = import.meta.env.VITE_APP_URL;

export const useFetch = <T>({api, method = 'POST', isBody = false} : FetchData) => {
  const fetchData = useMutation({
    mutationFn: async (data : T) => {
      const response = await fetch(`${API_URL}${api}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: isBody ? JSON.stringify(data) : undefined,
        credentials: "include",
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Ошибка в запросе ${api}, ${error}`);
      }

      console.log(`Ответ от ${api}`, response);
      return response.json();
    },
    onError(error) {
      console.log(error)
    },
    onSuccess(data) {
      console.log(`Данные из запроса ${api} `, data);
    },
  });
  return {
    fetchData
  }
};
