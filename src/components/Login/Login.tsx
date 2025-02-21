import {useEffect, useState} from "react";
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



export default function Login() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [backgroundList, setBackgroundList] = useState([
    {id: 0, src: Background1, isActive: false},
    {id: 1, src: Background2, isActive: false},
    {id: 2, src: Background3, isActive: false},
    {id: 3, src: Background4, isActive: false},
    {id: 4, src: Background5, isActive: false},
  ]);
  const [activeImage, setActiveImage] = useState(1);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth - 0.5); // Изменение 30px
      const y = (event.clientY / innerHeight - 0.5) ;
      setOffset({ x, y });
    }

    function handleBackground() {
      setActiveImage(prev => {
        const newActiveImage = (prev + 1) % backgroundList.length;
        setBackgroundList(prev =>
          prev.map(item =>
            ({...item, isActive: item.id === newActiveImage})));
        return newActiveImage;
      });
    }
    const imageInterval = setInterval(handleBackground, 5000);
    handleBackground();
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(imageInterval)
    };
  }, []);

  useEffect(() => {
    console.log(activeImage);
  }, [activeImage]);

  return (
    <div className="login">
      <div className="login__background-container">
        {backgroundList.map((item) =>
          <img src={item.src}
               alt="Фон"
               className={`login__background ${item.isActive ? 'login__background--active' : ''}`}
               key={item.id}
               style={{ transform: `translate(${offset.x * 10}px, ${offset.y * 10}px)`}}
          />)}
        <CalculatorSvg
          className="login__background--calculator"
          style={{ transform: `translate(${offset.x * 150}px, ${offset.y * 150}px)` }}
        />
        <CalendarSvg
          className="login__background--calendar"
          style={{ transform: `translate(${offset.x * 100}px, ${offset.y * 100}px)` }}
        />
        <CheckSvg
          className="login__background--check"
          style={{ transform: `translate(${offset.x * 50}px, ${offset.y * 50}px)` }}
        />
        <ClockSvg
          className="login__background--clock"
          style={{ transform: `translate(${offset.x * 25}px, ${offset.y * 25}px)` }}
        />
        <EmailSvg
          className="login__background--email"
          style={{ transform: `translate(${offset.x * 75}px, ${offset.y * 75}px)` }}
        />
        <FinanceSvg
          className="login__background--finance"
          style={{ transform: `translate(${offset.x * 125}px, ${offset.y * 125}px)` }}
        />
        <FlagSvg
          className="login__background--flag"
          style={{ transform: `translate(${offset.x * 175}px, ${offset.y * 175}px)` }}
        />
        <Graph1Svg
          className="login__background--graph1"
          style={{ transform: `translate(${offset.x * 200}px, ${offset.y * 200}px)` }}
        />
        <Graph2Svg
          className="login__background--graph2"
          style={{ transform: `translate(${offset.x * 225}px, ${offset.y * 225}px)` }}
        />
      </div>
      <div  className="login__container">
        <Logo isWhiteTheme={true} logoWidth="100px" logoHeight="100px" nameWidth="100%" nameHeight="150px"/>
        <form action="" className="login__form" autoComplete="off">
          <fieldset>
            <legend className="login__legend">Логин</legend>
            <input name="login" id="login" type="text" placeholder="ivanov@gmail.com" className="login__input" />
          </fieldset>
          <fieldset>
            <legend className="login__legend">Пароль</legend>
            <input name="password" id="password" type="password" placeholder="strongpassword123" className="login__input" />
          </fieldset>
          <button type="submit" className="login__button">Войти</button>
        </form>
      </div>
    </div>
  );
}
