import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import "./auth.css";
const Signin = () => {
  return (
    <>
      <form action="" method="get">
        <div className="row">
          <FaUser className="input_icon" />
          <input type="text" name="username" placeholder="Username" required />
        </div>

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

        <input type="submit" value="SignIn" />
      </form>
    </>
  );
};

export default Signin;
