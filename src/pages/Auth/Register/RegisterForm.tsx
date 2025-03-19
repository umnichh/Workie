import { useState } from 'react';
import { RegisterCredentials } from '@/types/auth.types';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

interface FormData {
  login: string;
  password: string;
  confirmPassword: string;
  email: string;
}

export const RegisterForm = () => {
  const [formData, setFormData] = useState<FormData>({
    login: '',
    password: '',
    confirmPassword: '',
    email: '',
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
    mutationFn: async (data: RegisterCredentials) => {
      const response = await fetch(`${import.meta.env.VITE_APP_URL}/auth/register`, {
        method: "POST",
        body: JSON.stringify(data),
        credentials: 'include'
      })

      if (!response.ok) {
        console.log('Login failed', (await response.text()));
      }
    },
    onSuccess() {
      navigate('/login')
    },
    onError(error) {
      console.error(error);
    },
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const credentials: RegisterCredentials = {
      username: formData.login,
      email: formData.email,
      password: formData.password,
    };
    auth.mutate(credentials);
  };

  return (
    <form className="login__form" onSubmit={handleSubmit} autoComplete="off">
      <fieldset>
        <legend className="login__legend">Логин</legend>
        <input
          name="login"
          value={formData.login}
          onChange={handleChange}
          type="text"
          placeholder="ivanov"
          className="login__input"
        />
      </fieldset>

      <fieldset>
        <legend className="login__legend">Email</legend>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="ivanov@gmail.com"
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

      <fieldset>
        <legend className="login__legend">Подтвердите пароль</legend>
        <input
          name="confirmPassword"
          value={formData.confirmPassword}
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
        {auth.isPending ? 'Регистрация...' : 'Зарегистрироваться'}
      </button>
    </form>
  );
}
