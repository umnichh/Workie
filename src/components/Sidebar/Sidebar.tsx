import CreateSvg from '../../assets/create.svg?react'
import HomeSvg from '../../assets/home.svg?react'
import NotificationSvg from '../../assets/notifications.svg?react'
import TaskSvg from '../../assets/tasks.svg?react'
import GoalSvg from '../../assets/goals.svg?react'
import IdeaSvg from '../../assets/ideas.svg?react'
import MapSvg from '../../assets/ideas.svg?react'
import ArrowDown from '../../assets/arrowdown.svg?react'
// import ArrowUp from '../../assets/arrowup.svg?react'

export default function Sidebar(){
  return(
    <aside className="sidebar">
      <div className="sidebar__section-top">
        <button className="sidebar__create-button">
          <CreateSvg className="sidebar__create-icon"/>
          Создать
        </button>
        <button className="sidebar__button">
          <HomeSvg className="sidebar__icon"/>
          Главная
        </button>
        <button className="sidebar__button">
          <TaskSvg className="sidebar__icon"/>
          Мои задачи
        </button>
        <button className="sidebar__button">
          <NotificationSvg className="sidebar__icon"/>
          Уведомления
        </button>
      </div>
      <div className="sidebar__section-bottom">
        <div className="sidebar__analitycs">
          <button className="sidebar__analitycs-button">
            Аналитика
            <ArrowDown className="sidebar__analitycs-icon"/>
          </button>
          <button className="sidebar__button">
            <GoalSvg className="sidebar__icon"/>
            Цели
          </button>
          <button className="sidebar__button">
            <IdeaSvg className="sidebar__icon"/>
            Идеи
          </button>
          <button className="sidebar__button">
            <MapSvg className="sidebar__icon"/>
            RoadMap
          </button>
        </div>
        <div className="sidebar__projects">
          <button className="sidebar__projects-button">
            Проекты
            <ArrowDown className="sidebar__projects-icon"/>
          </button>
        </div>
      </div>
    </aside>
  )
}

