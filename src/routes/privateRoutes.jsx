import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider/useAuth";

export const PrivateRoutes = ({ children }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.token) {
    //return <Navigate to="/app_dmetal_dev" />;
    return navigate("/app_dmetal_dev");
  }

  return children;
};
