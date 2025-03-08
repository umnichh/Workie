import React from "react";
import { useUIContext } from "../../hooks/useUIContext";
import { SidebarButtonProps } from "../../types/sidebar";

export default function SidebarButton({id, Svg, text, isActive, setButtons} : SidebarButtonProps){
  const {isSidebarHidden} = useUIContext();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedButton = Number(e.currentTarget.dataset.button);
    setButtons(prev =>  prev.map((item) => {
      if (item.id === clickedButton){
        return {...item, isActive: true}
      } else {
        return {...item, isActive : false}
      }
    })
    )
  }

  return(
    <button className={`sidebar__button ${ isActive? 'sidebar__button--active' : ''}`} onClick={(e) => handleClick(e)} data-button={id}>
      <Svg />
      <span className={`sidebar__label ${isSidebarHidden ? 'sidebar__label--hidden' : ''}`}>{text}</span>
    </button>
  )
}