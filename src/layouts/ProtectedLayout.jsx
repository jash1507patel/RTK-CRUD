import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";

function ProtectedLayout({ requiredRole, children }) {
  const { user, role } = useContext(AuthContext);

  if (!user && !role) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/notFound" replace />;
  }

  return children;
}

export default ProtectedLayout;
