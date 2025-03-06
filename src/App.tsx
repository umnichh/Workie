import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ProtectedRoute from "./shared/ProtectedRoute";
import "./styles/style.scss";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const [isSideBarHidden, setIsSideBarHidden] = useState(false);
  function handleSidebarHidden() {
    setIsSideBarHidden(!isSideBarHidden);
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/"
          element={
            <div className="home">
              <Header
                isSideBarHidden={isSideBarHidden}
                setIsSideBarHidden={handleSidebarHidden}
              />
              <Sidebar isSideBarHidden={isSideBarHidden} />
              <Main />
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
