import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import Login from './components/Login/Login'
import ProtectedRoute from './shared/ProtectedRoute'
import './styles/style.scss'
import { useState } from "react";
import {Route, Routes} from "react-router-dom";

export default function App() {
  const [isSideBarHidden, setIsSideBarHidden] = useState(false);
  const [isWhiteTheme, setWhiteTheme] = useState(false);

  function handleTheme(){
    setWhiteTheme(!isWhiteTheme);
  }

  function handleSidebarHidden() {
    setIsSideBarHidden(!isSideBarHidden)
  }

  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <div className="home">
            <Header handleTheme={handleTheme} isWhiteTheme={isWhiteTheme} isSideBarHidden={isSideBarHidden} setIsSideBarHidden={handleSidebarHidden}/>
            <Sidebar isWhiteTheme={isWhiteTheme} isSideBarHidden={isSideBarHidden}/>
            <Main isWhiteTheme={isWhiteTheme}/>
          </div>
        </ProtectedRoute>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}


