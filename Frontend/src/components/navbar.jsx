import "./navbar.css";

import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <div>
          <Link to="/">Shop</Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
      <div className="login">
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
}

export default Navbar;