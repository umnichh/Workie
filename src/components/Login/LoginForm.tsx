import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import {LoginCredentials} from "../../types/auth.ts";

interface FormData {
  identifier: string;
  password: string;
}

export function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    identifier: '',
    password: '',
  });
  const { loginMutation } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const credentials: LoginCredentials = {
      identifier: formData.identifier,
      password: formData.password,
    };
    loginMutation.mutate(credentials);
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
        disabled={loginMutation.isPending}
      >
        {loginMutation.isPending ? 'Вход...' : 'Войти'}
      </button>
    </form>
  );
}