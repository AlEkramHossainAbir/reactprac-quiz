import classes from "../styles/Account.module.css";

export default function Account() {
  return (
    <div className={classes.account}>
      <div class="account">
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <a href="index">Signup</a>
        {/* <span class="material-icons-outlined" title="Logout"> logout </span> */}
      </div>
    </div>
  );
}
