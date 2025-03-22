import { useContext } from 'react';
import { createContext } from 'react';
import { InterfaceContext } from '@/types/sidebar.types';

export const UIContext = createContext<InterfaceContext | undefined>(undefined);

export const useInterfaceContext = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('Context not found');
  }
  return context;
};
