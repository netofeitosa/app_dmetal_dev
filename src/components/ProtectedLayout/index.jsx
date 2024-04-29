import React from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { Navigate } from "react-router-dom";

export const ProtectedLayout = ({ children }) => {
  const auth = useAuth();

  if (!auth.token) {
    return <Navigate to="/app_dmetal_dev/" />;
  }

  return children;
};
