import React from "react";

type SidebarProps = {
  Svg: React.FC,
  text: string,
  isHidden: boolean
  type?: string
}

export default function SidebarButton({Svg, text, isHidden, type = 'default'} : SidebarProps){
  return(
    <button className={`${type === 'create' ? 'sidebar__create' : 'sidebar__button'}`}>
      <Svg />
      <span className={`sidebar__label ${isHidden ? 'sidebar__label--hidden' : ''}`}>{text}</span>
    </button>
  )
}