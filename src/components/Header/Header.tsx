import MenuIcon from "../../assets/menu.svg?react";
import HelpIcon from '../../assets/help.svg?react';
import ProfileIcon from '../../assets/profile.svg?react';
import SearchIcon from '../../assets/search.svg?react';
import LogoComponent from '../../shared/Logo.tsx';
import Moon from '../../assets/moon.svg?react';
import Sun from '../../assets/sun.svg?react';

import { useState } from "react";
export default function HeaderComponent() {
  const [isWhiteTheme, setWhiteTheme] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <button className="header__button header__button--menu">
            <MenuIcon />
          </button>
          <LogoComponent/>
        </div>

        <div className="header__search">
          <SearchIcon className="header__search-icon" />
          <input
            type="text"
            placeholder="Поиск..."
            className="header__search-input"
          />
        </div>

        <div className="header__controls">
          <button className={`header__switch ${isWhiteTheme ? 'header__switch--white' : ''}`} onClick={() => setWhiteTheme(!isWhiteTheme)}>
            <div className={`header__toggle ${isWhiteTheme ? 'header__toggle--black' : ''}`}></div>
            {!isWhiteTheme && <Moon className="header__toggle-moon"/>}
            {isWhiteTheme && <Sun className="header__toggle-sun"/>}
          </button>
          <button className="header__button">
            <HelpIcon />
          </button>
          <button className="header__button">
            <ProfileIcon />
          </button>
        </div>
      </div>
    </header>
  );
}