import { useMutation } from '@tanstack/react-query';
import { LoginCredentials, RegisterCredentials, User } from '../types/auth';
import {useNavigate} from "react-router-dom";

const API_URL = import.meta.env.VITE_APP_URL;

export function useAuth() {
  const navigate = useNavigate();
  const loginMutation = useMutation<User, Error, LoginCredentials>({
    mutationFn: async (credentials) => {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
        credentials: 'include',
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Login failed');
      }

      return response.json();
    },
    onSuccess: () => {

      navigate('/');
    },
    onError: (error) => {
      alert('Ошибка входа: ' + error.message);
    }
  });

  const registerMutation = useMutation<Error, RegisterCredentials>({
    mutationFn: async (credentials) => {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
        credentials: 'include',
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Registration failed');
      }

      console.log(response);
      return response.json();
    },
    onSuccess: (data) => {
      console.log(data)
      navigate('/');
  },
    onError: (error) => {
      console.error(error);
  }
  });

  return {
    loginMutation,
    registerMutation,
  };
}