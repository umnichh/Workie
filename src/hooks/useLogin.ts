import { useMutation } from "@tanstack/react-query";
import { LoginCredentials } from "@/types/auth.types";
import { useNavigate } from "react-router-dom";
import { projects } from "@/utils/projects.service";

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: async (data: LoginCredentials) => projects.login(data),
    onSuccess() {
      navigate('/')
    },
    onError(error) {
      console.error(error);
    },
  })
  return {mutate, isPending}
}