import { SidebarButtons } from "./sidebar.data";
import SidebarButton from "./components/SidebarButton";
import CreateButton from "./components/CreateDialog";
import CreateSvg from "@/assets/Sidebar/create.svg?react";
import ArrowDown from "@/assets/Shared/arrowdown.svg?react";

import { useState } from "react";
import { useUIContext } from "@/hooks/useUIContext";
import { useQuery } from "@tanstack/react-query";

export default function Sidebar() {
  const [buttons, setButtons] = useState(SidebarButtons)
  const [isAnalyticsHidden, setIsAnalyticsHidden] = useState(false);
  const [isProjectsHidden, setIsProjectsHidden] = useState(false);
  const { isSidebarHidden } = useUIContext();

  const projects = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_APP_URL}/project`, {
        method: 'GET',
        credentials: 'include'
      })
      return response.json();
    }
  })
  console.log(projects);
  return (
    <nav className={`sidebar ${isSidebarHidden ? "sidebar--hidden" : ""}`}>
      <div className="sidebar__top">
        <CreateButton Svg={CreateSvg} text="Создать" />
        {buttons
          .filter((item) => item.position === "top")
          .map((item) => (
            <SidebarButton
              key={item.id}
              id={item.id}
              Svg={item.svg}
              text={item.text}
              setButtons={setButtons}
              isActive={item.isActive}
            />
          ))}
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
                className={`sidebar__arrow ${
                  isAnalyticsHidden ? "sidebar__arrow--rotate" : ""
                }`}
              />
            </button>
          )}
          <div
            className={`sidebar__analytics-container ${
              isAnalyticsHidden ? "sidebar__analytics-container--hidden" : ""
            }`}
          >
            {buttons
              .filter((item) => item.position === "bottom")
              .map((item) => (
                <SidebarButton
                  key={item.id}
                  id={item.id}
                  Svg={item.svg}
                  text={item.text}
                  setButtons={setButtons}
                  isActive={item.isActive}
                />
              ))}
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
                className={`sidebar__arrow ${
                  isProjectsHidden ? "sidebar__arrow--rotate" : ""
                }`}
              />
            </button>
          )}
          <div className="sidebar__projects-container">
            {projects.isLoading && <p>Загрузка...</p>}
            {projects.data && projects.data.map((item : {name : string}) => (
              <button>{item.name}</button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
