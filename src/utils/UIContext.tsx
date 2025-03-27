import React, { useState } from "react";
import { UIContext } from "../hooks/useInterfaceContext";
import { useWebSocket } from "@/hooks/useWebSocket";

export const UIContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarHidden, setIsSidebarHidden] = useState<boolean>(false);



  const { isConnected } = useWebSocket();


  return (
    <UIContext.Provider
      value={{
        isSidebarHidden,
        setIsSidebarHidden,
      }}>
      <div className="home">
        {children}
      </div>
    </UIContext.Provider>
  )


}