import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../store";
import { useEffect } from "react";
import { getUserProfile } from "../store/user";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getUserProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const user = useSelector((state: AppState) => state?.user?.user);
  if (!user || !user.email || user.email =='' || user?.email?.length <= 0) {
    return <Navigate to="/auth/login" replace />;
  }
  return <Outlet />;
}