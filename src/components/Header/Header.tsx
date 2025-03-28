import HelpIcon from '@/assets/Header/help.svg?react';
import ProfileIcon from '@/assets/Header/profile.svg?react';
import { Logo } from '@/components/Logo/Logo.tsx';
import { ThemeSwitcher } from './ThemeSwitcher.tsx';
import { NavSwitcher } from './NavSwitcher.tsx';
import { Search } from './Search.tsx';
import { useInterfaceContext } from '@/hooks/useInterfaceContext.ts';

export const Header = () => {
  const { isSidebarHidden, setIsSidebarHidden } = useInterfaceContext();
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <NavSwitcher
            isSidebarHidden={isSidebarHidden}
            setIsSidebarHidden={setIsSidebarHidden}
          />
          <Logo logoWidth="40px" logoHeight="40px" nameHeight="75px" />
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
