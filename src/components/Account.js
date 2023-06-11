import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Account.module.css";

export default function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
      <div className="account">
        {!currentUser ? (
          <span>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </span>
        ) : (
          <span>
            <span className="material-icons-outlined" title="Account">
              account_circle
            </span>
            <span>{currentUser.displayName}</span>
            <span
              className="material-icons-outlined"
              title="Logout"
              onClick={logout}
            >
              logout
            </span>
          </span>
        )}

        {/* <span class="material-icons-outlined" title="Logout"> logout </span> */}
      </div>
    </div>
  );
}
