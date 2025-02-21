import {Navigate} from "react-router-dom";
import {JSX} from "react";
type ProtectedRouteProps = {
  children: JSX.Element
}
export default function ProtectedRoute({children} : ProtectedRouteProps) {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />
  }
  return (<>{children}</>)
}
