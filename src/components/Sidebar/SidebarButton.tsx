import { useUIContext } from "@/hooks/useUIContext";
import { SidebarButtonProps } from "../../types/sidebar.types";

export default function SidebarButton({ Svg, text, color, active, setActive, circle, id }: SidebarButtonProps) {
  const { isSidebarHidden } = useUIContext();
  const handleClick = () => {
    setActive(id);
  }
  return (
    <button className={`sidebar__button ${active === id ? 'sidebar__button--active' : ''}`} onClick={handleClick}>
      {circle &&
        <div style={{
          width: "10px",
          height: "10px",
          backgroundColor: `${color}`,
          borderRadius: "100%"
        }}>
        </div>}
      {Svg && <Svg />}
      <span className={`sidebar__label ${isSidebarHidden ? 'sidebar__label--hidden' : ''}`}>{text}</span>
    </button>
  )
}