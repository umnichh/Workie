import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { RegisterCredentials } from "../../types/auth";

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { registerMutation } = useAuth();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.login) {
      newErrors.login = 'Логин обязателен';
    }

    if (!formData.email) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Некорректный email';
    }

    if (!formData.password) {
      newErrors.password = 'Пароль обязателен';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Пароль должен быть не менее 8 символов';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const credentials: RegisterCredentials = {
        identifier: formData.login,
        email: formData.email,
        password: formData.password,
      };
      registerMutation.mutate(credentials);
    }
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
          className={`login__input ${errors.login ? 'login__input--error' : ''}`}
        />
        {errors.login && <span className="login__error">{errors.login}</span>}
      </fieldset>

      <fieldset>
        <legend className="login__legend">Email</legend>
        <input 
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="ivanov@gmail.com"
          className={`login__input ${errors.email ? 'login__input--error' : ''}`}
        />
        {errors.email && <span className="login__error">{errors.email}</span>}
      </fieldset>

      <fieldset>
        <legend className="login__legend">Пароль</legend>
        <input 
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="••••••••"
          className={`login__input ${errors.password ? 'login__input--error' : ''}`}
        />
        {errors.password && <span className="login__error">{errors.password}</span>}
      </fieldset>

      <fieldset>
        <legend className="login__legend">Подтвердите пароль</legend>
        <input 
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          type="password"
          placeholder="••••••••"
          className={`login__input ${errors.confirmPassword ? 'login__input--error' : ''}`}
        />
        {errors.confirmPassword && <span className="login__error">{errors.confirmPassword}</span>}
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