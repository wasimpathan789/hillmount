import "./SignUp.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import signUpUser from "../redux/autSlice";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    console.log(userPassword, username);
    dispatch(signUpUser({ username, userPassword }));
  };
  return (
    <div className="signup">
      <div className="signupLeft">
        <h1>Already a member ?</h1>
        <h5>Please sign in here</h5>
        <div className="SignUpButton">
          <Link to={"login"}>
            <button>Sign In</button>
          </Link>
        </div>
      </div>
      <div className="signupRight">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h3>Hill Mount School</h3>
        </div>
        <h1>Create an account</h1>
        {/* <h5>
          Welcome back, <br />
          You have been missed !
        </h5> */}

        <form className="signupForm" onSubmit={handleForm}>
          <div className="SingUpOption">
            <select name="" id="">
              <option value="">Student</option>
              <option value="">Staff</option>
              <option value="">Admin</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <div className="forgotPassword">
            <Link>Forgot Password ?</Link>
          </div>
          <div className="signupButton">
            <button type="submit">Sign Up</button>
          </div>
          <div className="signupLogin">
            <p>Note registered ?</p>
            <Link>Login</Link>
          </div>

          {/* <p>Don't have an account ?</p>
      <Link>Regsiter</Link> */}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
