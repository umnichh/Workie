import React from "react";
import HelpIcon from "../../assets/Header/help.svg?react";
import ProfileIcon from "../../assets/Header/profile.svg?react";
import LogoComponent from "../../shared/Logo.tsx";
import ThemeSwitcher from "./ThemeSwitcher";
import NavSwitcher from "./NavSwitcher.tsx";
import Search from "./Search.tsx";

type HeaderProps = {
  isSideBarHidden: boolean;
  setIsSideBarHidden: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HeaderComponent({ isSideBarHidden, setIsSideBarHidden }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <NavSwitcher isSideBarHidden={isSideBarHidden} setIsSideBarHidden={setIsSideBarHidden} />
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
