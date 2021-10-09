import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => (
  <div className="container flex justify-between mx-auto mt-4">
    <Link>
      <Logo className="h-8  w-8" />
    </Link>
    <nav>
      <ul className="flex uppercase space-x-8">
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
