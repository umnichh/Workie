import React, { useState } from "react";
import { Project } from "@/types/sidebar.types";
import { UIContext } from "../../hooks/useUIContext";
import { useWebSocket } from "@/hooks/useWebSocket";


export const UIContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarHidden, setIsSidebarHidden] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean | string>(false);
  const [currentProject, setCurrentProject] = useState<number | null>(null)
  const [projects, setProjects] = useState<Project[] | null>(null);
  const { isConnected } = useWebSocket();


  const handleModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.modal')) {
      setIsModal(false);
    }
  };

  if (isConnected) {
    return (
      <UIContext.Provider
        value={{
          isSidebarHidden,
          setIsSidebarHidden,
          isModal,
          setIsModal,
          projects,
          setProjects,
          handleModal,
          currentProject,
          setCurrentProject,
        }}>
        <div className="home" onClick={(e) => handleModal(e)}>
          {children}
        </div>
      </UIContext.Provider>
    )
  } else {
    <div>Network error</div>
  }
}