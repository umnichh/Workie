import React from "react";

type SidebarProps = {
  Svg: React.FC,
  text: string,
  isHidden: boolean
  type?: string,
  func?: Function;
}

export default function SidebarButton({Svg, text, isHidden} : SidebarProps){
  return(
    <button className='sidebar__button'>
      <Svg />
      <span className={`sidebar__label ${isHidden ? 'sidebar__label--hidden' : ''}`}>{text}</span>
    </button>
  )
}