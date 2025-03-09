import { backgroundImages, backgroundSvgs } from '@/features/Auth/Login/background.data';
import Logo from "@/common/components/Logo/Logo.tsx";
import { LoginBackground } from '../Login/LoginBackground';
import { RegisterForm } from './RegisterForm';

export default function Register() {
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
          <p>Уже есть аккаунт? <a href="/login">Войти</a></p>
        </div>
      </div>
    </div>
  );
}