import "./SignUp.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";
const SignUp = () => {
  return (
    <div className="login">
      <div className="loginLeft">
        <h1>Already a member ?</h1>
        <h5>Please sign in here</h5>
        <div className="SignUpButton">
          <Link to={"login"}>
            <button>Sign In</button>
          </Link>
        </div>
      </div>
      <div className="loginRight">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h3>Hill Mount School</h3>
        </div>
        <h1>Create an account</h1>
        {/* <h5>
          Welcome back, <br />
          You have been missed !
        </h5> */}

        <form className="loginForm">
          <div className="SingUpOption">
            <ul>
              Choose option
              <li>Student</li>
              <li>Student</li>
              <li>Student</li>
            </ul>
          </div>
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

export default SignUp;
