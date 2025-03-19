import CreateSvg from '@/assets/Sidebar/create.svg?react';
import ArrowDown from '@/assets/Shared/arrowdown.svg?react';
import { SidebarButtons } from '../../constants/sidebar.data';
import { SidebarButton } from './SidebarButton';
import { CreateOptions } from './CreateOptions';
import { projectsColors } from '@/constants/projects.colors';
import { useState } from 'react';
import { useUIContext } from '@/hooks/useUIContext';
import { Project } from '@/types/sidebar.types';
import { useProjects } from '@/hooks/useProjects';

export const Sidebar = () => {
  const [isAnalyticsHidden, setIsAnalyticsHidden] = useState(false);
  const [isProjectsHidden, setIsProjectsHidden] = useState(false);
  const { isSidebarHidden } = useUIContext();
  const { data, isPending } = useProjects();

  return (
    <nav className={`sidebar ${isSidebarHidden ? 'sidebar--hidden' : ''}`}>
      <div className="sidebar__top">
        <CreateOptions Svg={CreateSvg} text="Создать" />
        {SidebarButtons.filter((item) => item.position === 'top').map(
          (item) => (
            <SidebarButton
              key={item.id}
              Svg={item.svg}
              text={item.text}
              link={item.link}
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
                  key={item.text}
                  Svg={item.svg}
                  text={item.text}
                  link={item.link}
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
            {isPending
              ? <div>LOADING PROJECTS...</div>
              : data && data.map((item: Project, index: number) => (
                <SidebarButton
                  id={item.id}
                  key={item.id}
                  text={item.name}
                  link={`/projects/${item.id}`}
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
