import { useInterfaceContext } from '@/hooks/useInterfaceContext';
import { SidebarButtonProps } from '../../types/sidebar.types';
import { NavLink } from 'react-router-dom';

export const SidebarButton = ({ Svg, text, color, circle, link }: SidebarButtonProps) => {

  const { isSidebarHidden } = useInterfaceContext();
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `sidebar__button ${isActive ? 'sidebar__button--active' : ''}`
      }
    >
      {circle && (
        <div
          className='sidebar__project-color'
          style={{
            backgroundColor: `${color}`,
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
