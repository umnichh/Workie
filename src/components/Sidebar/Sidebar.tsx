import { SidebarButtons } from '../../constants/sidebar.data';
import SidebarButton from './SidebarButton';
import CreateButton from './CreateDialog';
import CreateSvg from '@/assets/Sidebar/create.svg?react';
import ArrowDown from '@/assets/Shared/arrowdown.svg?react';
import { projectsColors } from '@/constants/projects.colors';

import { useState } from 'react';
import { useUIContext } from '@/hooks/useUIContext';
import { useQuery } from '@tanstack/react-query';

export default function Sidebar() {
  const [active, setActive] = useState('sbtn-1');
  const [isAnalyticsHidden, setIsAnalyticsHidden] = useState(false);
  const [isProjectsHidden, setIsProjectsHidden] = useState(false);
  const { isSidebarHidden } = useUIContext();

  const projects = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_APP_URL}/project`, {
        method: 'GET',
        credentials: 'include',
      });
      return response.json();
    },
  });
  return (
    <nav className={`sidebar ${isSidebarHidden ? 'sidebar--hidden' : ''}`}>
      <div className="sidebar__top">
        <CreateButton Svg={CreateSvg} text="Создать" />
        {SidebarButtons.filter((item) => item.position === 'top').map(
          (item) => (
            <SidebarButton
              id={item.id}
              setActive={setActive}
              active={active}
              key={item.id}
              Svg={item.svg}
              text={item.text}
            />
          )
        )}
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__analitycs">
          {!isSidebarHidden && (
            <button
              className="sidebar__button sidebar__button--expand"
              onClick={() => setIsAnalyticsHidden(!isAnalyticsHidden)}
            >
              Аналитика
              <ArrowDown
                className={`sidebar__arrow ${isAnalyticsHidden ? 'sidebar__arrow--rotate' : ''
                  }`}
              />
            </button>
          )}
          <div
            className={`sidebar__analytics-container ${isAnalyticsHidden ? 'sidebar__analytics-container--hidden' : ''
              }`}
          >
            {SidebarButtons.filter((item) => item.position === 'bottom').map(
              (item) => (
                <SidebarButton
                  id={item.id}
                  setActive={setActive}
                  active={active}
                  key={item.text}
                  Svg={item.svg}
                  text={item.text}
                />
              )
            )}
          </div>
        </div>
        <div className="sidebar__projects">
          {!isSidebarHidden && (
            <button
              className="sidebar__button sidebar__button--expand"
              onClick={() => setIsProjectsHidden(!isProjectsHidden)}
            >
              Проекты
              <ArrowDown
                className={`sidebar__arrow ${isProjectsHidden ? 'sidebar__arrow--rotate' : ''
                  }`}
              />
            </button>
          )}
          <div
            className={`sidebar__projects-container ${isProjectsHidden ? 'sidebar__projects-container--hidden' : ''
              }`}
          >
            {projects.isLoading && <p>Загрузка...</p>}
            {projects.data &&
              projects.data.map((item: { name: string }, index: number) => (
                <SidebarButton
                  id={`sbtn-projects-${index}`}
                  setActive={setActive}
                  active={active}
                  text={item.name}
                  color={String(
                    projectsColors.find(
                      (item: { id: number }) => item.id === index
                    )?.color
                  )}
                  circle={true}
                />
              ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
