import { useMutation } from "@tanstack/react-query";
import { projects } from "@/utils/projects.service";
import { ProjectForm } from "@/components/Sidebar/CreateProject";

export const useCreateProject = () => {
  const {mutate, isPending} = useMutation({
    mutationKey: ['add project'],
    mutationFn: (newProject : ProjectForm) => projects.createProject(newProject),
    onError: (error) => {
      console.error(`Create project failed ${error}`)
    },
    onSuccess: () => {
      console.log(`Project created succesfully`)
    }
  })
  return {mutate, isPending}
}