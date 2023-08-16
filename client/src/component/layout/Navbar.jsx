import "./Navbar.css";
import user from "../../assets/user.png";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = ({ toggle }) => {
  return (
    <div className={toggle ? "navbar-active navbar" : "navbar"}>
      <div className="nav-right">
        Welcome Back - <p>Wasim</p>
      </div>
      <div className="nav-center">
        <input type="text" placeholder="Search..." />
        <AiOutlineSearch size={20} />
      </div>
      <div className="nav-left">
        Logout
        <img src={user} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
