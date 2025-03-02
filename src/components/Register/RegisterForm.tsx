import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { RegisterCredentials } from "../../types/auth.ts";


interface FormData {
  login: string;
  password: string;
  confirmPassword: string;
  email: string;
}

export function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    login: '',
    password: '',
    confirmPassword: '',
    email: '',
  });
  const { registerMutation } = useAuth();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const credentials: RegisterCredentials = {
      username: formData.login,
      email: formData.email,
      password: formData.password,
    };
    registerMutation.mutate(credentials);
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
        disabled={registerMutation.isPending}
      >
        {registerMutation.isPending ? 'Регистрация...' : 'Зарегистрироваться'}
      </button>
    </form>
  );
}