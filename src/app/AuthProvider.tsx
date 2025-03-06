import { createContext, useState } from "react";
import { User } from '../types/auth'


interface AuthContext {
  user: object,
  setUser: React.Dispatch<React.SetStateAction<User>>
}

export const AuthContext = createContext<AuthContext | undefined>(undefined);

export const AuthProvider = ({children} : {children : React.ReactNode}) => {
  const [user, setUser] = useState<User>({
    id: '',
    email: '',
    identifier: ''
  });
  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}