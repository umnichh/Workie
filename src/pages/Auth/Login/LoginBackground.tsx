import { useEffect, useState } from "react";
import { BackgroundImage, BackgroundSvg } from "./background.types.ts";

interface LoginBackgroundProps {
  backgroundImages: BackgroundImage[];
  backgroundSvgs: BackgroundSvg[];
}

export function LoginBackground({ backgroundImages, backgroundSvgs }: LoginBackgroundProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [, setButtonsImage] = useState(1);
  const [backgrounds, setBackgrounds] = useState(backgroundImages);

  const handleBackground = () => {
    setButtonsImage(prev => {
      const newActiveImage = (prev + 1) % backgrounds.length;
      setBackgrounds(prev =>
        prev.map(item => ({...item, isActive: item.id === newActiveImage}))
      );
      return newActiveImage;
    });
  };

  useEffect(() => {
    const imageInterval = setInterval(handleBackground, 5000);
    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth - 0.5);
      const y = (event.clientY / innerHeight - 0.5);
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    handleBackground();
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="login__background-container">
      {backgrounds.map((item) => (
        <img 
          src={item.src}
          alt="Фон"
          className={`login__background ${item.isActive ? 'login__background--active' : ''}`}
          key={item.id}
          style={{ transform: `translate(${offset.x * 10}px, ${offset.y * 10}px)`}}
        />
      ))}
      {backgroundSvgs.map(({ id, src: SvgComponent, className }, index) => (
        <SvgComponent
          key={id}
          className={`login__background--${className}`}
          style={{ 
            transform: `translate(${offset.x * (index + 2) * 25}px, ${offset.y * (index + 2) * 25}px)` 
          }}
        />
      ))}
    </div>
  );
}
