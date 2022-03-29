import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const userLogin = true;
  return userLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
