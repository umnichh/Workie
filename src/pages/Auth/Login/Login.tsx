import { Logo } from '@/components/Logo/Logo.tsx';
import { backgroundImages, backgroundSvgs } from '../../../constants/background.data.ts';
import { AuthBackground } from '@/pages/Auth/AuthBackground.tsx';
import { LoginForm } from './LoginForm.tsx';

export const Login = () => {
  return (
    <div className="login">
      <AuthBackground
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
          <p className="login__no-account">
            Нет аккаунта?{' '}
            <a href="/register" className="login__link">
              Зарегистрироваться
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
