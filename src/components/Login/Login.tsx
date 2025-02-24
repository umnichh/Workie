import React, {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import CalculatorSvg from "../../assets/Login/calculation-mathematics-calculator-svgrepo-com.svg?react";
import CalendarSvg from "../../assets/Login/calendar-svgrepo-com.svg?react";
import CheckSvg from "../../assets/Login/check-svgrepo-com.svg?react";
import ClockSvg from "../../assets/Login/clock-svgrepo-com.svg?react";
import EmailSvg from "../../assets/Login/link-svgrepo-com.svg?react";
import FinanceSvg from "../../assets/Login/attach-svgrepo-com.svg?react";
import FlagSvg from "../../assets/Login/flag-svgrepo-com.svg?react";
import Graph1Svg from "../../assets/Login/settings-svgrepo-com.svg?react";
import Graph2Svg from "../../assets/Login/graph-business-pie-analytics-marketing-svgrepo-com.svg?react";
import Logo from "../../shared/Logo.tsx";
import Background1 from "../../assets/Login/background1.jpg";
import Background2 from "../../assets/Login/background2.jpg";
import Background3 from "../../assets/Login/background3.jpg";
import Background4 from "../../assets/Login/background4.jpg";
import Background5 from "../../assets/Login/background5.jpg";
import store from "../../app/store";



export default function Login() {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [, setActiveImage] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [backgroundImages, setBackgroundList] = useState([
    {id: 0, src: Background1, isActive: false},
    {id: 1, src: Background2, isActive: false},
    {id: 2, src: Background3, isActive: false},
    {id: 3, src: Background4, isActive: false},
    {id: 4, src: Background5, isActive: false},
  ]);

  const backgroundSvgs = [
    {id: 0, src: CalculatorSvg, className: 'calculator'},
    {id: 1, src: CalendarSvg, className: 'calendar'},
    {id: 2, src: CheckSvg, className: 'check'},
    {id: 3, src: ClockSvg, className: 'clock'},
    {id: 4, src: EmailSvg, className: 'email'},
    {id: 5, src: FinanceSvg, className: 'finance'},
    {id: 6, src: FlagSvg, className: 'flag'},
    {id: 7, src: Graph1Svg, className: 'graph1'},
    {id: 8, src: Graph2Svg, className: 'graph2'},
  ]

  function handleAuth(e: React.SyntheticEvent) {
    e.preventDefault();
    handleLogin();
  }

  async function handleLogin() {
    try {
      const response = await fetch('http://217.114.2.143:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: login,
          password: password,
        })
      })


      if (response.ok){
        const data = await response.json();
        document.cookie = `token=${data.token}; path=/;`;
      }
    } catch (e) {
      console.error(e);
    }
  }

  function handleBackground() {
    setActiveImage(prev => {
      const newActiveImage = (prev + 1) % backgroundImages.length;
      setBackgroundList(prev =>
        prev.map(item =>
          ({...item, isActive: item.id === newActiveImage})));
      return newActiveImage;
    });
  }

  useEffect(() => {
    const imageInterval = setInterval(handleBackground, 5000);
    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth - 0.5); // Изменение 30px
      const y = (event.clientY / innerHeight - 0.5) ;
      setOffset({ x, y });
    }

    window.addEventListener("mousemove", handleMouseMove);
    handleBackground();
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, []);

  return (
    <div className="login">
      <div className="login__background-container">
        {backgroundImages.map((item) =>
          <img src={item.src}
               alt="Фон"
               className={`login__background ${item.isActive ? 'login__background--active' : ''}`}
               key={item.id}
               style={{ transform: `translate(${offset.x * 10}px, ${offset.y * 10}px)`}}
          />)}
        {backgroundSvgs.map(({ id, src: SvgComponent, className }, index) => (
          <SvgComponent
            key={id}
            className={`login__background--${className}`}
            style={{ transform: `translate(${offset.x * (index + 2) * 25}px, ${offset.y * (index + 2) * 25}px)` }}
          />
        ))}
      </div>
      <div  className="login__container">
        <Logo isWhiteTheme={true} logoWidth="100px" logoHeight="100px" nameWidth="100%" nameHeight="150px"/>
        <form action="" className="login__form" autoComplete="off">
          <fieldset>
            <legend className="login__legend">Логин</legend>
            <input onChange={(e) => setLogin(e.target.value)} name="login" id="login" type="text" placeholder="ivanov@gmail.com" className="login__input" />
          </fieldset>
          <fieldset>
            <legend className="login__legend">Пароль</legend>
            <input onChange={(e) => setPassword(e.target.value)}  name="password" id="password" type="password" placeholder="strongpassword123" className="login__input" />
          </fieldset>
          <button type="submit" onClick={(e) => handleAuth(e)} className="login__button">Войти</button>
        </form>
      </div>
    </div>
  );
}
