import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import "./auth.css";
const Signup = () => {
  return (
    <form action="" method="get">
      <div className="row">
        <MdEmail className="input_icon" />
        <input type="email" name="email" placeholder="Email" required />
      </div>
      <div className="row">
        <FaLock className="input_icon" />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
      </div>
      <input type="submit" value="SignUp" />
    </form>
  );
};

export default Signup;
