export interface FetchData {
  api: string,
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE',
  isBody?: boolean,
}