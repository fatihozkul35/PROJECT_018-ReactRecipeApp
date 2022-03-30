import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRouter = () => {
  const { userLogin } = useContext(AuthContext);

  return userLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
