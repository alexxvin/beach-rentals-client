import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/location">
        <button>Locations</button>
      </Link>
    </nav>
  );
}
export default Navbar;
