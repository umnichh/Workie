import {
  backgroundImages,
  backgroundSvgs,
} from '@/pages/Auth/Login/background.data';
import { Logo } from '@/components/Logo/Logo';
import { LoginBackground } from '../Login/LoginBackground';
import { RegisterForm } from './RegisterForm';

export const Register = () => {
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
        <RegisterForm />
        <div className="register__footer">
          <p className="login__no-account">
            Уже есть аккаунт?{' '}
            <a href="/login" className="login__link">
              Войти
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
