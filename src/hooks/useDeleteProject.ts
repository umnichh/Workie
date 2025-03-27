import { useMutation, useQueryClient } from "@tanstack/react-query";
import { projects } from "@/utils/projects.service";
import { useNavigate } from "react-router-dom";

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {mutate, isPending} = useMutation({
    mutationKey: ['delete project'],
    mutationFn: (projectId : string) => projects.deleteProject(projectId),
    onError: (error) => {
      console.error(`Delete project failed ${error}`)
    },
    onSuccess: () => {
      console.log(`Project deleted succesfully`)
      navigate('/')
      return queryClient.invalidateQueries({queryKey: ['projects']});
    }
  })
  return {mutate, isPending}
}