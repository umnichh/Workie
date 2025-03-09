import React from "react";
import MenuIcon from "@/assets/Header/menu.svg?react";

type MenuButtonProps = {
  isSidebarHidden: boolean;
  setIsSidebarHidden: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavSwitcher({ isSidebarHidden, setIsSidebarHidden }: MenuButtonProps) {
  return (
    <button
      className="nav-switcher"
      onClick={() => setIsSidebarHidden(!isSidebarHidden)}
    >
      <MenuIcon className={`nav-switcher__icon ${isSidebarHidden ? "nav-switcher__icon--rotate" : ""}`} />
    </button>
  );
}
