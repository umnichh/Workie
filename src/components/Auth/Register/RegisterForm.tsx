import { RegisterCredentials } from '@/types/auth.types';
import { useRegister } from '@/hooks/useRegister';

export const RegisterForm = () => {
  const { mutate, isPending } = useRegister();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formValues: RegisterCredentials = {
      username: formData.get('username') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string
    }
    mutate(formValues);
  };

  return (
    <form id="login" className="login__form" onSubmit={handleSubmit} autoComplete="off">
      <fieldset>
        <legend className="login__legend">Логин</legend>
        <input
          name="username"
          type="text"
          placeholder="ivanov"
          className="login__input"
        />
      </fieldset>
      <fieldset>
        <legend className="login__legend">Email</legend>
        <input
          name="email"
          type="email"
          placeholder="ivanov@gmail.com"
          className="login__input"
        />
      </fieldset>
      <fieldset>
        <legend className="login__legend">Пароль</legend>
        <input
          name="password"
          type="password"
          placeholder="••••••••"
          className="login__input"
        />
      </fieldset>
      <fieldset>
        <legend className="login__legend">Подтвердите пароль</legend>
        <input
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
          className="login__input"
        />
      </fieldset>
      <button
        type="submit"
        className="login__button"
        disabled={isPending}
      >
        {isPending ? 'Регистрация...' : 'Зарегистрироваться'}
      </button>
    </form>
  );
}
