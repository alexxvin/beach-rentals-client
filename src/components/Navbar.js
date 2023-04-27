import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="navbar">
        <div className="home-logo">
          <NavLink to="/">
            <img
              class="nav-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0chqr6tqcjgbEaGom4XN7HhhlSBxj1wEOQ&usqp=CAU"
              alt="logo"
            />
          </NavLink>
        </div>
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
      </div>
    </nav>
  );
}
export default Navbar;
