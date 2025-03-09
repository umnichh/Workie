import Header from "./features/Header/Header";
import Sidebar from "./features/Sidebar/Sidebar";
import Main from "./features/Main/Main";
import Login from "./features/Auth/Login/Login";
import Register from "./features/Auth/Register/Register";
import ProtectedRoute from "./common/components/ProtectedRoute/ProtectedRoute";
import "./styles/global.scss";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { UIContext } from "./hooks/useUIContext";

export default function App() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const [isCreateDialog, setIsCreateDialog] = useState(false);
  const [isCreate, setIsCreate] = useState('');

  const handleCreate = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    console.log(target);
    if (
      (!target.closest(".create") && !target.closest(".project"))
    ) {
      setIsCreateDialog(false);
      setIsCreate('');
    }
  };

  return (
    <UIContext.Provider
      value={{
        isSidebarHidden,
        isCreateDialog,
        setIsSidebarHidden,
        setIsCreateDialog,
        isCreate,
        setIsCreate,
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/"
            element={
              <div className="home" onClick={(e) => handleCreate(e)}>
                <Header />
                <Sidebar />
                <Main />
              </div>
            }
          />
        </Route>
      </Routes>
    </UIContext.Provider>
  );
}
