import { useMutation } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_APP_URL;

export interface FetchData {
  api: string,
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE',
  isBody?: boolean,
  func? : () => void
}

export const useFetch = <T>({api, method = 'POST', isBody = false, func} : FetchData) => {
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
      console.error(error)
    },
    onSuccess(data) {
      func && func();
      console.log(`Данные из запроса ${api} `, data);
    },
  });
  return { fetchData }
};
