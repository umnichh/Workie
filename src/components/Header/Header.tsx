import React, { useContext } from "react";
import HelpIcon from "../../assets/Header/help.svg?react";
import ProfileIcon from "../../assets/Header/profile.svg?react";
import LogoComponent from "../../shared/Logo.tsx";
import ThemeSwitcher from "./ThemeSwitcher";
import NavSwitcher from "./NavSwitcher.tsx";
import Search from "./Search.tsx";
import { useAppContext } from "../../hooks/useAppContext.tsx";

export default function HeaderComponent() {
  const {isSidebarHidden, setIsSidebarHidden} = useAppContext()
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <NavSwitcher isSidebarHidden={isSidebarHidden} setIsSidebarHidden={setIsSidebarHidden} />
          <LogoComponent logoWidth="40px" logoHeight="40px" nameHeight="75px" />
        </div>
        <Search />
        <div className="header__controls">
          <ThemeSwitcher />
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
