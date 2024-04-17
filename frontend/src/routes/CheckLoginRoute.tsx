import { Outlet } from "react-router-dom";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserProfile } from "../store/user";

export default function CheckLoginRoute() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getUserProfile());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Outlet />;
}