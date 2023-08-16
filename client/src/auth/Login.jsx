import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

const Login = () => {
  return (
    <div className="login">
      <div className="loginLeft">
        <h1>New Here ?</h1>
        <h5>Sign up here for Latest update</h5>
        <div className="SignUpButton">
          <Link to={"/login/signup"}>
            <button>Sing Up</button>
          </Link>
        </div>
      </div>
      <div className="loginRight">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h3>Hill Mount School</h3>
        </div>
        <h1>Lets sign in</h1>
        <h5>
          Welcome back, <br />
          You have been missed !
        </h5>

        <form className="loginForm">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <div className="forgotPassword">
            <Link>Forgot Password ?</Link>
          </div>
          <div className="loginButton">
            <button>Login</button>
          </div>
          {/* <p>Don't have an account ?</p>
          <Link>Regsiter</Link> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
