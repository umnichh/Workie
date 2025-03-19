import { useUIContext } from '@/hooks/useUIContext';
import { SidebarButtonProps } from '../../types/sidebar.types';
import { NavLink } from 'react-router-dom';

export const SidebarButton = ({ Svg, text, color, circle, link }: SidebarButtonProps) => {

  const { isSidebarHidden, setModal } = useUIContext();
  const handleClick = () => {
    setModal('');
  };
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `sidebar__button ${isActive ? 'sidebar__button--active' : ''}`
      }
      onClick={handleClick}
    >
      {circle && (
        <div
          style={{
            width: '10px',
            height: '10px',
            backgroundColor: `${color}`,
            borderRadius: '100%',
          }}
        ></div>
      )}
      {Svg && <Svg />}
      <span
        className={`sidebar__label ${isSidebarHidden ? 'sidebar__label--hidden' : ''}`}
      >
        {text}
      </span>
    </NavLink>
  );
}
