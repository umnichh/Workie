import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

interface LoginCredentials {
  identifier: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export function useAuth() {
  const navigate = useNavigate();
  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginCredentials) => {
      const response = await fetch(`http://217.114.2.143:8080/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials),
        credentials: 'include',
      });
      
      if (!response.ok) {
        throw new Error('Login failed');
      }
      
      return await response.json() as Promise<LoginResponse>;
    },
    onSuccess: (data) => {
      document.cookie = `token=${data.token}`;
      navigate('/');
    },
    onError: (error: Error) => {
      console.error('Login error:', error.message);
    }
  });

  return { loginMutation };
}