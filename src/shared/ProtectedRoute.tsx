import {Outlet} from "react-router-dom";
import Cookies from "js-cookie";

export default function ProtectedRoute() {
  const token = Cookies.get("set-token");
  console.log(token);
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" />;
  // }
  return <Outlet />;
}
