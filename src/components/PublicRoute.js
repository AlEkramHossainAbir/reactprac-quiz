import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// export default function PublicRoute({ component: Component }) {
//   const { currentUser } = useAuth();

//   return !currentUser ? (
//     (props) => <Component {...props} />
//   ) : (
//     <Navigate to="/" />
//   );
// }

const PublicRoute = ({ children }) => {
  const { currentUser } = useAuth();
  console.log(children.props);

  if (!currentUser) {
    return children;
  }

  return <Navigate to="/" />;
};

export default PublicRoute;
