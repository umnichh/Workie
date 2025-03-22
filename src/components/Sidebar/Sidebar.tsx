import ArrowDown from '@/assets/Shared/arrowdown.svg?react';
import { CreateOptions } from './CreateOptions';
import { useState } from 'react';
import { useInterfaceContext } from '@/hooks/useInterfaceContext';
import { SidebarMainList } from './SidebarMainList';
import { SidebarAnalyticsList } from './SidebarAnalyticsList';
import { SidebarProjectsList } from './SidebarProjectsList';
import CreateSvg from '@/assets/Sidebar/create.svg?react';


export const Sidebar = () => {
  const [isAnalyticsHidden, setIsAnalyticsHidden] = useState(false);
  const [isProjectsHidden, setIsProjectsHidden] = useState(false);
  const { isSidebarHidden } = useInterfaceContext();
  const [isCreateOptions, setIsCreateOptions] = useState(false)

  return (
    <nav className={`sidebar ${isSidebarHidden ? 'sidebar--hidden' : ''}`}>
      <div className="sidebar__top">
        <button
          className="create__button"
          onClick={() => setIsCreateOptions(!isCreateOptions)}
        >
          <CreateSvg />
          <span className={`create__label ${isSidebarHidden ? 'create__label--hidden' : ''}`}>
            Создать
          </span>
        </button>
        {isCreateOptions && <CreateOptions />}
        <SidebarMainList />
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__analitycs">
          {!isSidebarHidden && (
            <button
              className="sidebar__button sidebar__button--expand"
              onClick={() => setIsAnalyticsHidden(!isAnalyticsHidden)}
            >
              Аналитика
              <ArrowDown className={`sidebar__arrow ${isAnalyticsHidden ? 'sidebar__arrow--rotate' : ''}`} />
            </button>
          )}
          <div className={`sidebar__analytics-container ${isAnalyticsHidden ? 'sidebar__analytics-container--hidden' : ''}`}>
            <SidebarAnalyticsList />
          </div>
        </div>
        <div className="sidebar__projects">
          {!isSidebarHidden && (
            <button
              className="sidebar__button sidebar__button--expand"
              onClick={() => setIsProjectsHidden(!isProjectsHidden)}
            >
              Проекты
              <ArrowDown className={`sidebar__arrow ${isProjectsHidden ? 'sidebar__arrow--rotate' : ''}`} />
            </button>
          )}
          <div
            className={`sidebar__projects-container ${isProjectsHidden ? 'sidebar__projects-container--hidden' : ''}`}>
            <SidebarProjectsList />
          </div>
        </div>
      </div>
    </nav>
  );
}
