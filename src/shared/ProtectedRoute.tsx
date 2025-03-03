import {Navigate} from "react-router-dom";
import Cookies from 'js-cookie';
import {JSX} from "react";
type ProtectedRouteProps = {
  children: JSX.Element
}
export default function ProtectedRoute({children} : ProtectedRouteProps) {
  const token = Cookies.get("set-token");
  if (token) {
    return (<>{children}</>)
  } else {
    <Navigate to={"/login"} />;
  }
}
