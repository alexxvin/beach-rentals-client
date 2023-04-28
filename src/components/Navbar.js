import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="navbar">
        <div className="home-logo">
          <NavLink to="/">
            <img
              class="nav-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEoGdf1R1ffd4lalW1E4I_Q_sXG_XbKOFxw&usqp=CAU"
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="nav-links">
          <div class="navigation-links">
            <NavLink to="location" style={{ textDecoration: "none" }}>
              Locations
            </NavLink>
          </div>
          <div className="navigation-links">
            <NavLink to="how-it-works" style={{ textDecoration: "none" }}>
              How it works
            </NavLink>
          </div>
          <div className="navigation-links">
            <NavLink to="FAQ" style={{ textDecoration: "none" }}>
              FAQ
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
