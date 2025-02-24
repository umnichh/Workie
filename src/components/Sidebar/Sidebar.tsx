import CreateSvg from '../../assets/Sidebar/create.svg?react'
import HomeSvg from '../../assets/Sidebar/home.svg?react'
import NotificationSvg from '../../assets/Sidebar/notifications.svg?react'
import TaskSvg from '../../assets/Sidebar/tasks.svg?react'
import GoalSvg from '../../assets/Sidebar/goals.svg?react'
import IdeaSvg from '../../assets/Sidebar/ideas.svg?react'
import MapSvg from '../../assets/Sidebar/roadmap.svg?react'
import ArrowDown from '../../assets/Shared/arrowdown.svg?react'
import { useState } from "react";

type SidebarProps = {
  isSideBarHidden: boolean,
  isWhiteTheme: boolean
}


export default function Sidebar({isSideBarHidden, isWhiteTheme}: SidebarProps) {
  const [isAnalyticsHidden, setIsAnalyticsHidden] = useState(false);
  const [isProjectsHidden, setIsProjectsHidden] = useState(false);
  return(
    <aside className={`sidebar ${isSideBarHidden ? 'sidebar--hidden' : ''} ${isWhiteTheme ? 'sidebar--white' : ''}`}>
      <div className="sidebar__top">
        <button className="sidebar__create">
          <CreateSvg/>
          <span className={`sidebar__label ${isSideBarHidden ? 'sidebar__label--hidden' : ''}`}>Создать</span>
        </button>
        <button className="sidebar__button">
          <HomeSvg/>
          <span className={`sidebar__label ${isSideBarHidden ? 'sidebar__label--hidden' : ''}`}>Главная</span>
        </button>
        <button className="sidebar__button ">
          <TaskSvg/>
          <span className={`sidebar__label ${isSideBarHidden ? 'sidebar__label--hidden' : ''}`}>Задачи</span>

        </button>
        <button className="sidebar__button ">
          <NotificationSvg/>
          <span className={`sidebar__label ${isSideBarHidden ? 'sidebar__label--hidden' : ''}`}>Уведомления</span>

        </button>
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
            <button className="sidebar__button">
              <GoalSvg/>
              <span className={`sidebar__label ${isSideBarHidden ? 'sidebar__label--hidden' : ''}`}>Цели</span>

            </button>
            <button className="sidebar__button ">
              <IdeaSvg/>
              <span className={`sidebar__label ${isSideBarHidden ? 'sidebar__label--hidden' : ''}`}>Идеи</span>

            </button>
            <button className="sidebar__button ">
              <MapSvg/>
              <span className={`sidebar__label ${isSideBarHidden ? 'sidebar__label--hidden' : ''}`}>Roadmap</span>

            </button>
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
    </aside>
  )
}

