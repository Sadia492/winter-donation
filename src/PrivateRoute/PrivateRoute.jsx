import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user } = useContext(authContext);
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
}
