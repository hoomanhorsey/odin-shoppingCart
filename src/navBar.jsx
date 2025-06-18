// External libraries
import { Link } from "react-router-dom";

// Internal/local modules
import { cartCalc } from "./code/cartHelpers";

function NavBar({ cart }) {
  return (
    <>
      <div className="navBar">
        <ul className="navBarUL">
          <li>
            <Link className="navBarLink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navBarLink" to="/electronics">
              Electronics
            </Link>
          </li>
          <li>
            <Link className="navBarLink" to="/jewelery">
              Jewelery
            </Link>
          </li>
          <li>
            <Link className="navBarLink" to="/men%27s%20clothing">
              Men's Clothing
            </Link>
          </li>
          <li>
            <Link className="navBarLink" to="/women%27s%20clothing">
              Women's Clothing
            </Link>
          </li>
          <li>
            <Link className="navBarLink" to="/cart">
              Shopping Cart [{cartCalc(cart)}]
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export { NavBar };
