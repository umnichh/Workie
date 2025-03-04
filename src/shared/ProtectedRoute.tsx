import {Outlet} from "react-router-dom";

export default function ProtectedRoute() {
  // const isAuthenticated = document.cookie.includes('set-token');
  //
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" />;
  // }
  return <Outlet />;
}
