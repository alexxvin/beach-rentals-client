import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="how-it-works"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          How it works
        </NavLink>
        <NavLink
          to="location"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Locations
        </NavLink>
      </ul>
    </nav>
  );
}
export default Navbar;
