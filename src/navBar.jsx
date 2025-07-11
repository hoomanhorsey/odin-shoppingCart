// External libraries
import { Link } from "react-router-dom";

// Internal/local modules
import { cartCalc } from "./code/cartHelpers";
import style from "./navBar.module.css";

function NavBar({ cart }) {
  return (
    <>
      <div className={style.navBar}>
        <ul className={style.navBarUL}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/electronics">Electronics</Link>
          </li>
          <li>
            <Link to="/jewelery">Jewelery</Link>
          </li>
          <li>
            <Link to="/men%27s%20clothing">Masc Clothes</Link>
          </li>
          <li>
            <Link to="/women%27s%20clothing">Femme Clothes</Link>
          </li>
          <li>
            <Link to="/cart">Cart [{cartCalc(cart)}]</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export { NavBar };
