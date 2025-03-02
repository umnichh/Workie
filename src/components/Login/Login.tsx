import { backgroundImages, backgroundSvgs } from './constants';
import Logo from "../../shared/Logo";
import { LoginBackground } from './LoginBackground';
import { LoginForm } from './LoginForm';

export default function Login() {
  return (
    <div className="login">
      <LoginBackground 
        backgroundImages={backgroundImages} 
        backgroundSvgs={backgroundSvgs} 
      />
      <div className="login__container">
        <Logo 
          logoWidth="100px" 
          logoHeight="100px" 
          nameWidth="100%" 
          nameHeight="150px"
        />
        <LoginForm />
        <div className="login__footer">
          <p>Нет аккаунта? <a href="/register">Зарегистрироваться</a></p>
        </div>
      </div>
    </div>
  );
}