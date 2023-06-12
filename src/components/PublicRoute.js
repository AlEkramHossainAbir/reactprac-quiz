import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PublicRoute({ component: Component }) {
  const { currentUser } = useAuth();

  return !currentUser ? (
    (props) => <Component {...props} />
  ) : (
    <Navigate to="/" />
  );
}
