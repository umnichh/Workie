import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ProtectedRoute from "./shared/ProtectedRoute";
import "./styles/style.scss";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "./hooks/useAppContext";

export default function App() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const handleCreate = (e : React.MouseEvent<HTMLDivElement>) => {
    const target = e.target;
    if (!(target as HTMLElement).className.includes("create")) {
      setIsCreate(false);
    }
  }

  return (
    <AppContext.Provider value={{isSidebarHidden, isCreate, setIsSidebarHidden, setIsCreate}}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/"
            element={
              <div className="home" onClick={(e) => handleCreate(e)}>
                <Header />
                <Sidebar/>
                <Main />
              </div>
            }
          />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}
