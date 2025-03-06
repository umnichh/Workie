import { createContext } from "react";
import { User } from '../types/auth'

interface AuthContext {
  user: object,
  setUser: React.Dispatch<React.SetStateAction<User>>
}

export const AuthContext = createContext<AuthContext | undefined>(undefined);

