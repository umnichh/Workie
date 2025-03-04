import {Navigate} from "react-router-dom";
import {JSX} from "react";
type ProtectedRouteProps = {
  children: JSX.Element
}
export default function ProtectedRoute({children} : ProtectedRouteProps) {
  const isAuthenticated = document.cookie.includes('set-token');
  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }
  return (<>{children}</>)
}
