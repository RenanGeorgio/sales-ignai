import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const Anonymous = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
}

export default Anonymous;