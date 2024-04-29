import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider/useAuth";

export const PrivateRoutes = ({ children }) => {
  const auth = useAuth();

  if (!auth.token) {
    return <Navigate to="/app_dmetal_dev" />;
  }

  return children;
};
