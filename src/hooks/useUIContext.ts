import { useContext ,} from "react";
import { createContext } from "react";
import { UIContextInterface } from "@/features/Sidebar/sidebar.types";

export const UIContext = createContext<UIContextInterface | undefined>(undefined);
export const useUIContext = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
      throw new Error('Context not found');
  }
  return context;
}
