import LogoPng from '../assets/logo.png'
import LogoNameSvg from '../assets/logoname.svg?react'

export default function Logo() {
  return (
    <a href="https://www.youtube.com/watch?v=SuyDe1VXaEk&ab_channel=FACE-Topic" className="logo">
      <img src={LogoPng} alt="Логотип" className="logo__image" />
      <LogoNameSvg className="logo__name" />
    </a>
    )
}
