import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { loginMutation } = useAuth();

  const handleAuth = (e: React.SyntheticEvent) => {
    e.preventDefault();
    loginMutation.mutate({ identifier: login, password });
  };

  return (
    <form className="login__form" autoComplete="off">
      <fieldset>
        <legend className="login__legend">Логин</legend>
        <input 
          onChange={(e) => setLogin(e.target.value)} 
          name="login" 
          id="login" 
          type="text" 
          placeholder="ivanov@gmail.com" 
          className="login__input" 
        />
      </fieldset>
      <fieldset>
        <legend className="login__legend">Пароль</legend>
        <input 
          onChange={(e) => setPassword(e.target.value)}  
          name="password" 
          id="password" 
          type="password" 
          placeholder="strongpassword123" 
          className="login__input" 
        />
      </fieldset>
      <button 
        type="submit" 
        onClick={handleAuth} 
        className="login__button"
        disabled={loginMutation.isPending}
      >
        {loginMutation.isPending ? 'Вход...' : 'Войти'}
      </button>
    </form>
  );
}