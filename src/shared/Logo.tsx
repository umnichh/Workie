import LogoPng from '../assets/Shared/logo.png'
import LogoNameSvg from '../assets/Shared/logoname.svg?react'
type LogoProps = {
  isWhiteTheme: boolean
}
export default function Logo({isWhiteTheme}: LogoProps) {
  return (
    <a href="https://www.youtube.com/watch?v=SuyDe1VXaEk&ab_channel=FACE-Topic" className="logo">
      <img src={LogoPng} alt="Логотип" className="logo__image" />
      <LogoNameSvg className={`logo__name ${isWhiteTheme ? 'logo__name--white' : ''}`} />
    </a>
    )
}
