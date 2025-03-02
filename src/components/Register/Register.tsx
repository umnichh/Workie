import { backgroundImages, backgroundSvgs } from '../../types/background.ts';
import Logo from "../../shared/Logo";
import { LoginBackground } from '../Login/LoginBackground';
import { RegisterForm } from './RegisterForm';

export default function Register() {
  return (
    <div className="login"> {/* можно переиспользовать стили логина */}
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