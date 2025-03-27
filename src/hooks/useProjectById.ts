import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { projects } from "@/utils/projects.service";

export const useProjectById = (projectId : string) => {
  const {data, error, isSuccess, isError, isPending} = useQuery({
    queryKey: ['project'],
    queryFn: () => projects.getProject(projectId)
  })
  
  useEffect(() => {
    if (isSuccess) console.log('Get project by ID success', data);
  }, [isSuccess, data])

    useEffect(() => {
    if (isError) console.error(`Get project by ID failed ${error}`);
  }, [isError, error])

  return {data, error, isSuccess, isError, isPending}
}