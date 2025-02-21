import MenuIcon from "../../assets/Header/menu.svg?react";
import HelpIcon from '../../assets/Header/help.svg?react';
import ProfileIcon from '../../assets/Header/profile.svg?react';
import SearchIcon from '../../assets/Header/search.svg?react';
import LogoComponent from '../../shared/Logo.tsx';
import Moon from '../../assets/Header/moon.svg?react';
import Sun from '../../assets/Header/sun.svg?react';
import React from "react";

type HeaderProps = {
  isSideBarHidden: boolean;
  setIsSideBarHidden: React.Dispatch<React.SetStateAction<boolean>>
  handleTheme: () => void;
  isWhiteTheme: boolean;
}
export default function HeaderComponent({isSideBarHidden, setIsSideBarHidden, handleTheme, isWhiteTheme}: HeaderProps) {



  return (
    <header className={`header ${isWhiteTheme ? 'header--white' : ''}`}>
      <div className="header__container">
        <div className="header__left">
          <button className="header__button header__button--menu" onClick={() => setIsSideBarHidden(!isSideBarHidden)}>
            <MenuIcon className={`header__menu-icon ${isSideBarHidden ? 'header__menu-icon--rotate' : ''}`}/>
          </button>
          <LogoComponent isWhiteTheme={isWhiteTheme} />
        </div>

        <div className={`header__search ${isWhiteTheme ? 'header__search--white' : ''}`}>
          <SearchIcon className={`header__search-icon ${isWhiteTheme ? 'header__search-icon--white' : ''}`} />
          <input
            type="text"
            placeholder="Поиск..."
            className={`header__search-input ${isWhiteTheme ? 'header__search-input--white' : ''}`}
          />
        </div>

        <div className="header__controls">
          <button className={`header__switch ${isWhiteTheme ? 'header__switch--white' : ''}`} onClick={handleTheme}>
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