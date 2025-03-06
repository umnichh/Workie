import { useState } from "react";
import {LoginCredentials} from "../../types/auth.ts";
import { useFetch } from "../../hooks/useFetch.ts";

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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const { fetchData } = useFetch<LoginCredentials>({api: '/login', isBody: true});
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const credentials: LoginCredentials = {
      identifier: formData.identifier,
      password: formData.password,
    };
    fetchData.mutate(credentials);
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
        disabled={fetchData.isPending}
      >
        {fetchData.isPending ? 'Вход...' : 'Войти'}
      </button>
    </form>
  );
}