import { LoginCredentials } from '@/types/auth.types';
import { useLogin } from '@/hooks/useLogin';

export const LoginForm = () => {
  const { mutate, isPending } = useLogin();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement)
    const formValues: LoginCredentials = {
      identifier: formData.get('identifier') as string,
      password: formData.get('password') as string
    }
    mutate(formValues);
  };

  return (
    <form className="login__form" onSubmit={handleSubmit} autoComplete="off">
      <fieldset>
        <legend className="login__legend">Логин</legend>
        <input
          name="identifier"
          type="text"
          placeholder="ivanov"
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
      <button
        type="submit"
        className="login__button"
        disabled={isPending}
      >
        {isPending ? 'Вход...' : 'Войти'}
      </button>
    </form>
  );
}
