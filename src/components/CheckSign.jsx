import React, { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { Context } from "../App.jsx";

function CheckSign() {
  const location = useLocation();
  const { user, setUser } = useContext(Context);

  return Object.keys(user).length === 0 ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
}

export default CheckSign;
