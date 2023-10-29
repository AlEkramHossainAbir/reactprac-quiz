import Illustration from "../Illustration";
import LoginForm from "../LoginForm";

export default function Signup() {
  return (
    <>
      <h1>Login to your account</h1>
      <button type="button" class="btn btn-primary">
        Primary
      </button>

      <div className="column">
        <Illustration />
        <LoginForm />
      </div>
    </>
  );
}
