import { useContext ,} from "react";
import { createContext } from "react";

interface AppContext {
  isSidebarHidden: boolean,
  setIsSidebarHidden: React.Dispatch<React.SetStateAction<boolean>>,
  isCreate: boolean,
  setIsCreate: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = createContext<AppContext | undefined>(undefined);
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
      throw new Error('Context not found');
  }
  return context;
}
