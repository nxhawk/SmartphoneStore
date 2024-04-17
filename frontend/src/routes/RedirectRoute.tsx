import { Navigate, Outlet } from "react-router-dom";
import { AppDispatch, AppState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserProfile } from "../store/user";

export default function RedirectRoute() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getUserProfile());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const user = useSelector((state: AppState) => state?.user?.user);
  console.log(user);
  if (user.email.length > 0) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}