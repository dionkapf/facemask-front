import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="title">
        <p>BAYESIANS</p>
        <h3>Face Mask Detection</h3>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeStyle={{ textDecoration: "underline" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              activeStyle={{ textDecoration: "underline" }}
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeStyle={{ textDecoration: "underline" }}>
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
