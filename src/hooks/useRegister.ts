import { useMutation } from "@tanstack/react-query";
import { RegisterCredentials } from "@/types/auth.types";
import { useNavigate } from "react-router-dom";
import { projects } from "@/utils/projects.service";

export const useRegister = () => {
  const navigate = useNavigate();

  const {mutate, isPending} = useMutation({
      mutationFn: async (data: RegisterCredentials) => projects.register(data),
      onSuccess() {
        navigate('/login')
      },
      onError(error) {
        console.error(error);
      },
    })
    return {mutate, isPending}
}