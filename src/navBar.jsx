import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function cartCalc(cart) {
  return cart.reduce((sum, product) => {
    return sum + product.quantity;
  }, 0);
}

function NavBar({ cart }) {
  console.log(cartCalc(cart));
  return (
    <>
      <div className="navBar">
        <ul className="navBarUL">
          <li>
            {" "}
            <Link to="/">Home</Link> <span></span>
          </li>
          <li>
            <Link to="/cats">Cats</Link> <span></span>{" "}
          </li>
          <li>
            <Link to="/dogs">Dogs</Link> <span></span>{" "}
          </li>
          <li>
            <Link to="/other">Other</Link> <span></span>{" "}
          </li>
          <li>
            <Link to="/cart">Shopping Cart [{cartCalc(cart)}]</Link>
          </li>
          {/* <li>
          {" "}
          <Link to="categories/cats">Cats page</Link>
        </li>
        <li>
          {" "}
          <Link to="dogs">Dog page</Link>
        </li> */}
        </ul>
      </div>
    </>
  );
}

export { NavBar };
