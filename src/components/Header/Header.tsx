import HelpIcon from "@/assets/Header/help.svg?react";
import ProfileIcon from "@/assets/Header/profile.svg?react";
import LogoComponent from "@/components/Logo/Logo.tsx";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import NavSwitcher from "./NavSwitcher.tsx";
import Search from "./Search.tsx";
import { useUIContext } from "@/hooks/useUIContext.ts";

export default function HeaderComponent() {
  const {isSidebarHidden, setIsSidebarHidden} = useUIContext()
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
