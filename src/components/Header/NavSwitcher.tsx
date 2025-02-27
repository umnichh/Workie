import React from "react";
import MenuIcon from "../../assets/Header/menu.svg?react";

type MenuButtonProps = {
  isSideBarHidden: boolean;
  setIsSideBarHidden: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavSwitcher({ isSideBarHidden, setIsSideBarHidden }: MenuButtonProps) {
  return (
    <button
      className="nav-switcher"
      onClick={() => setIsSideBarHidden(!isSideBarHidden)}
    >
      <MenuIcon className={`nav-switcher__icon ${isSideBarHidden ? "nav-switcher__icon--rotate" : ""}`} />
    </button>
  );
}
