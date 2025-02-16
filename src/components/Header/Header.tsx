import Menu from  "../../assets/menu.svg?react"
import Logo from '../../assets/logo.png'
import LogoName from '../../assets/logoname.svg?react'
import Theme from '../../assets/theme.svg?react'
import Help from '../../assets/help.svg?react'
import Profile from '../../assets/profile.svg?react'
import Search from '../../assets/search.svg?react'


export default function Header(){
  return (
    <header className="header">
      <div className="header__left-section">
        <button className="header__menu-button">
          <Menu className="header__menu-icon" />
        </button>
        <div className="header__logo">
          <img src={Logo} alt="Логотип" className="header__logo-icon" />
          <LogoName className="header__logo-text" />
        </div>
      </div>

      <div className="header__search-bar">
        <Search className="header__search-icon" />
        <input type="text" placeholder="Поиск..." className="header__search-input" />
      </div>

      <div className="header__right-section">
        <button className="header__control-button">
          <Theme className="header__button-icon" />
        </button>
        <button className="header__control-button">
          <Help className="header__button-icon" />
        </button>

        <button className="header__control-button">
          <Profile className="header__profile-icon" />
        </button>
      </div>
    </header>
  )
}