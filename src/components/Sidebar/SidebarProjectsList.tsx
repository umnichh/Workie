import ArrowDown from '@/assets/Shared/arrowdown.svg?react';

import { SidebarButton } from "./SidebarButton"
import { Project } from "@/types/sidebar.types";
import { useProjects } from "@/hooks/useProjects";
import { useState } from "react";
import { useInterfaceContext } from '@/hooks/useInterfaceContext';


export const SidebarProjectsList = () => {
  const { data, isPending } = useProjects();
  const [isProjectsHidden, setIsProjectsHidden] = useState(false);
  const { isSidebarHidden } = useInterfaceContext();

  return (
    <>
      {!isSidebarHidden && (
        <button
          className="sidebar__button sidebar__button--expand"
          onClick={() => setIsProjectsHidden(!isProjectsHidden)}
        >
          Проекты
          <ArrowDown className={`sidebar__arrow ${isProjectsHidden ? 'sidebar__arrow--rotate' : ''}`} />
        </button>
      )
      }
      {
        isPending
          ? <div style={{ color: 'var(--text)' }}>LOADING PROJECTS...</div>
          : data &&
          <div className={`sidebar__projects-container ${isProjectsHidden ? ' sidebar__projects-container--hidden' : ''}`}>
            {data.map((item: Project) => (
              <SidebarButton
                id={item.id}
                key={item.id}
                text={item.name}
                link={`/projects/${item.id}`}
                color={item.color}
                circle={true}
              />
            ))}
          </div>

      }
    </>
  )
}