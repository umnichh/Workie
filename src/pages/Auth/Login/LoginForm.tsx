import { useState } from 'react';
import { LoginCredentials } from '@/types/auth.types';
import { useFetch } from '@/hooks/useFetch.ts';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

interface FormData {
  identifier: string;
  password: string;
}

export function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    identifier: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const auth = useMutation({
    mutationFn: async (data: LoginCredentials) => {
      const response = await fetch(`${import.meta.env.VITE_APP_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(data),
        credentials: 'include'
      })

      if (!response.ok) {
        console.log('Login failed', (await response.text()));
      }
    },
    onSuccess() {
      navigate('/')
    },
    onError(error) {
      console.error(error);
    },
  })


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const credentials: LoginCredentials = {
      identifier: formData.identifier,
      password: formData.password,
    };
    auth.mutate(credentials);
  };

  return (
    <form className="login__form" onSubmit={handleSubmit} autoComplete="off">
      <fieldset>
        <legend className="login__legend">Логин</legend>
        <input
          name="identifier"
          value={formData.identifier}
          onChange={handleChange}
          type="text"
          placeholder="ivanov"
          className="login__input"
        />
      </fieldset>

      <fieldset>
        <legend className="login__legend">Пароль</legend>
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="••••••••"
          className="login__input"
        />
      </fieldset>

      <button
        type="submit"
        className="login__button"
        disabled={auth.isPending}
      >
        {auth.isPending ? 'Вход...' : 'Войти'}
      </button>
    </form>
  );
}
