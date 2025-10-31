import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ role, children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Jika role-nya admin, tapi user bukan admin
  if (role === "admin" && user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}
