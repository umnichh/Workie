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

type SidebarProps = {
  isSideBarHidden: boolean,
}

export default function Sidebar({isSideBarHidden}: SidebarProps) {
  const [isAnalyticsHidden, setIsAnalyticsHidden] = useState(false);
  const [isProjectsHidden, setIsProjectsHidden] = useState(false);
  return(
    <nav className={`sidebar ${isSideBarHidden ? 'sidebar--hidden' : ''}`}>
      <div className="sidebar__top">
        <SidebarButton
          Svg={CreateSvg}
          text="Создать"
          isHidden={isSideBarHidden}
          type="create"
        />
        <SidebarButton
          Svg={HomeSvg}
          text="Главная"
          isHidden={isSideBarHidden}
        />
        <SidebarButton
          Svg={TaskSvg}
          text="Задачи"
          isHidden={isSideBarHidden}
        />
        <SidebarButton
          Svg={NotificationSvg}
          text="Уведомления"
          isHidden={isSideBarHidden}
        />
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__analitycs">
          {!isSideBarHidden &&
            <button className="sidebar__button sidebar__button--expand" onClick={() => setIsAnalyticsHidden(!isAnalyticsHidden)}>
            Аналитика
            <ArrowDown className={`sidebar__arrow ${isAnalyticsHidden ? 'sidebar__arrow--rotate' : ''}`}/>
          </button>
          }
          <div className={`sidebar__analytics-container ${isAnalyticsHidden ? 'sidebar__analytics-container--hidden' : ''}`}>
            <SidebarButton
              Svg={GoalSvg}
              text="Цели"
              isHidden={isSideBarHidden}
            />
            <SidebarButton
              Svg={IdeaSvg}
              text="Идеи"
              isHidden={isSideBarHidden}
            />
            <SidebarButton
              Svg={MapSvg}
              text="Roadmap"
              isHidden={isSideBarHidden}
            />
          </div>
        </div>
        <div className="sidebar__projects">
          {!isSideBarHidden &&
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

