import { useMutation } from '@tanstack/react-query';
import { LoginCredentials, RegisterCredentials, User } from '../types/auth';

interface AuthResponse {
  user: User;
  token: string;
}

export function useAuth() {
  const loginMutation = useMutation<AuthResponse, Error, LoginCredentials>({
    mutationFn: async (credentials) => {
      const response = await fetch('http://217.114.2.143:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
        credentials: 'include',
      });
      
      if (!response.ok) {
        throw new Error('Login failed');
      }
      
      return response.json();
    },
  });

  const registerMutation = useMutation<AuthResponse, Error, RegisterCredentials>({
    mutationFn: async (credentials) => {
      const response = await fetch('http://217.114.2.143:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
        credentials: 'include',
      });
      
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      
      return response.json();
    },
  });

  return {
    loginMutation,
    registerMutation,
  };
}