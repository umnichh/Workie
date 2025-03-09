import LogoPng from '@/assets/Shared/logo.png'
import LogoNameSvg from '@/assets/Shared/logoname.svg?react'

type LogoProps = {
  logoWidth: string,
  logoHeight: string,
  nameHeight: string
  nameWidth?: string
}
export default function Logo({logoWidth, logoHeight, nameHeight, nameWidth}: LogoProps) {
  return (
    <a href="https://www.youtube.com/watch?v=SuyDe1VXaEk&ab_channel=FACE-Topic" className="logo">
      <img width={logoWidth} height={logoHeight} src={LogoPng} alt="Логотип" className="logo__image" />
      <LogoNameSvg width={nameHeight} height={nameWidth ? nameWidth : ''} className='logo__name'/>
    </a>
    )
}
