import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { projects } from "@/utils/projects.service";

export const useProjects = () => {
  const {data, error, isSuccess, isError, isPending} = useQuery({
    queryKey: ['projects'],
    queryFn: () => projects.getProjects()
  })
  
  useEffect(() => {
    if (isSuccess) console.log('Get projects success');
  }, [isSuccess, data])

    useEffect(() => {
    if (isError) console.error(`Get projects failed ${error}`);
  }, [isError, error])

  return {data, error, isSuccess, isError, isPending}
}