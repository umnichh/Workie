import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import ProtectedRoute from "./utils/ProtectedRoute";
import "./styles/global.scss";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { UIContext } from "./hooks/useUIContext";
import { Monitoring } from "react-scan/monitoring";


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
    <Monitoring
            apiKey="s3YeLovyQ19EVp7buLw1ekSEVzGrRYRT" 
            url="https://monitoring.react-scan.com/api/v1/ingest"
    />
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
                <Home />
              </div>
            }
          />
        </Route>
      </Routes>
    </UIContext.Provider>
  );
}
