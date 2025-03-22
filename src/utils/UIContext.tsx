import React, { useState } from "react";
import { Project } from "@/types/sidebar.types";
import { UIContext } from "../hooks/useInterfaceContext";

export const UIContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarHidden, setIsSidebarHidden] = useState<boolean>(false);
  const [modal, setModal] = useState<string>('');
  const [projects, setProjects] = useState<Project[] | null>(null);

  const handleModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.modal')) {
      setModal('');
    }
  };

  return (
    <UIContext.Provider
      value={{
        isSidebarHidden,
        setIsSidebarHidden,
        modal,
        setModal,
        projects,
        setProjects,
        handleModal,
      }}>
      <div className="home" onClick={(e) => handleModal(e)}>
        {children}
      </div>
    </UIContext.Provider>
  )
}