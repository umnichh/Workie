import { useMutation } from '@tanstack/react-query';
import { LoginCredentials, RegisterCredentials, User } from '../types/auth';
import {useNavigate} from "react-router-dom";

const API_URL = import.meta.env.VITE_APP_URL;

export function useAuth() {
  const navigate = useNavigate();
  const loginMutation = useMutation<User, Error, LoginCredentials>({
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
        throw new Error('Login failed');
      }

      console.log(response);
      return response.json();
    },
    onSuccess: () => {
      navigate('/');
    },
    onError: () => {
      alert('Неверное имя пользователя или пароль');
    }
  });

  const registerMutation = useMutation<User, Error, RegisterCredentials>({
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
        throw new Error('Registration failed');
      }

      console.log(response);
      return response.json();
    },
    onSuccess: (data) => {
      console.table(data);
      navigate('/');
  },
    onError: (error) => {
      console.error(error);
      alert('Произошла ошибка');
  }
  });

  return {
    loginMutation,
    registerMutation,
  };
}