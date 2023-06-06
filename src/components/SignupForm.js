import { Link } from "react-router-dom";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignupForm() {
  return (
    <Form style={{ height: "500px" }}>
      <TextInput type="text" placeholder="Enter name" icon="person" required />

      <TextInput
        type="text"
        required
        placeholder="Enter email"
        icon="alternate_email"
      />

      <TextInput
        type="password"
        required
        placeholder="Enter password"
        icon="lock"
      />

      <TextInput
        type="password"
        required
        placeholder="Confirm password"
        icon="lock_clock"
      />

      <Checkbox required text="I agree to the Terms &amp; Conditions" />

      <Button type="submit">
        <span>Submit Now</span>
      </Button>

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
