import { useMutation } from "@tanstack/react-query";
import { projects } from "@/utils/projects.service";
import { useNavigate } from "react-router-dom";

export const useCreateProject = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['add project'],
    mutationFn: (newProject : {name : string}) => projects.createProject(newProject),
    onError: (error) => {
      console.error(`Create project failed ${error}`)
    },
    onSuccess: () => {
      console.log(`Project created succesfully`)
    }
  })
}