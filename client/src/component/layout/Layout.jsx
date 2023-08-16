import "./Layout.css";
import logo from "../../assets/logo2.png";
import { Children, useState } from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import MenuList from "./MenuList";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div className="layout">
      {/* sidebar  */}
      <div className={toggle ? " sidebar-active sidebar " : "sidebar  "}>
        <div className="sidebar-title">
          <img src={logo} alt="" />
          {toggle ? <p></p> : <h5>Hill Mount</h5>}
        </div>
        <div className="toggle">
          <p onClick={toggleHandler}>
            {toggle ? (
              <MdKeyboardDoubleArrowRight size={30} />
            ) : (
              <MdKeyboardDoubleArrowLeft size={30} />
            )}
          </p>
        </div>
        <div className="menu">
          <MenuList toggle={toggle} />
        </div>
      </div>

      {/* right bar  */}
      <div className="layout-container">
        <Navbar toggle={toggle} />
        <div className="layout-body">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
