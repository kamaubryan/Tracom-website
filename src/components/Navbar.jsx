import logo from "../assets/logo.jpg";
import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <img src={logo} alt="tracom-logo" className="main-logo" />
        <ul id="main-nav-ul">
          {/* {/* <li>
            <Link to="/Body">Home</Link>
          </li> */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/Body">Team</Link>
          </li>
          <li>
            <Link to="/Body">Contact</Link>
          </li>
        </ul>
        <div className="button">
          <Link to="/register" className="btn">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
