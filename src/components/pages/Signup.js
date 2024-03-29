import Illustration from "../Illustration";
import SignupForm from "../SignupForm";

export default function Signup() {
  return (
    <div
      style={{
        margin: "1rem",
      }}
    >
      <h1>Create an account</h1>
      <button type="button" class="btn btn-primary">
        Primary
      </button>

      <div className="column">
        <Illustration />
        <SignupForm />
      </div>
    </div>
  );
}
