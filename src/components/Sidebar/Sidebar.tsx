import CreateSvg from '../../assets/Sidebar/create.svg?react'
import HomeSvg from '../../assets/Sidebar/home.svg?react'
import NotificationSvg from '../../assets/Sidebar/notifications.svg?react'
import TaskSvg from '../../assets/Sidebar/tasks.svg?react'
import GoalSvg from '../../assets/Sidebar/goals.svg?react'
import IdeaSvg from '../../assets/Sidebar/ideas.svg?react'
import MapSvg from '../../assets/Sidebar/roadmap.svg?react'
import ArrowDown from '../../assets/Shared/arrowdown.svg?react'
import { useState } from "react";
import SidebarButton from "./SidebarButton";
import CreateButton from './CreateProject'
import { useAppContext } from '../../hooks/useAppContext'

export default function Sidebar() {
  const [isAnalyticsHidden, setIsAnalyticsHidden] = useState(false);
  const [isProjectsHidden, setIsProjectsHidden] = useState(false);
  const {isSidebarHidden, setIsCreate, isCreate} = useAppContext();
  return(
    <nav className={`sidebar ${isSidebarHidden ? 'sidebar--hidden' : ''}`}>
      <div className="sidebar__top">
        <CreateButton
          setIsCreate={setIsCreate}
          isCreate={isCreate}
          Svg={CreateSvg}
          text="Создать"
          isHidden={isSidebarHidden}
        />
        <SidebarButton
          Svg={HomeSvg}
          text="Главная"
          isHidden={isSidebarHidden}
        />
        <SidebarButton
          Svg={TaskSvg}
          text="Задачи"
          isHidden={isSidebarHidden}
        />
        <SidebarButton
          Svg={NotificationSvg}
          text="Уведомления"
          isHidden={isSidebarHidden}
        />
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__analitycs">
          {!isSidebarHidden &&
            <button className="sidebar__button sidebar__button--expand" onClick={() => setIsAnalyticsHidden(!isAnalyticsHidden)}>
            Аналитика
            <ArrowDown className={`sidebar__arrow ${isAnalyticsHidden ? 'sidebar__arrow--rotate' : ''}`}/>
          </button>
          }
          <div className={`sidebar__analytics-container ${isAnalyticsHidden ? 'sidebar__analytics-container--hidden' : ''}`}>
            <SidebarButton
              Svg={GoalSvg}
              text="Цели"
              isHidden={isSidebarHidden}
            />
            <SidebarButton
              Svg={IdeaSvg}
              text="Идеи"
              isHidden={isSidebarHidden}
            />
            <SidebarButton
              Svg={MapSvg}
              text="Roadmap"
              isHidden={isSidebarHidden}
            />
          </div>
        </div>
        <div className="sidebar__projects">
          {!isSidebarHidden &&
          <button className="sidebar__button sidebar__button--expand" onClick={() => setIsProjectsHidden(!isProjectsHidden)}>
            Проекты
            <ArrowDown className={`sidebar__arrow ${isProjectsHidden ? 'sidebar__arrow--rotate' : ''}`}/>
          </button>
          }
          <div className="sidebar__projects-container"></div>
        </div>
      </div>
    </nav>
  )
}

