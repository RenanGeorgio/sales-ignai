import React from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const RequireAuth = () => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" state={{ from: location }} replace />
    )
}

export default RequireAuth;