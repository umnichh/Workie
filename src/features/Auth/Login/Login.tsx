import Logo from "@/common/components/Logo/Logo";
import { backgroundImages, backgroundSvgs } from './background.data.ts';
import { LoginBackground } from './LoginBackground.tsx';
import { LoginForm } from './LoginForm.tsx';

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