import { useSelector } from "react-redux";
import { AppState } from "../store";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const user = useSelector((state: AppState) => state?.user?.user);
  if (user?.email?.length <= 0) {
    return <Navigate to="/auth/login" replace />;
  }
  return <Outlet />;
}