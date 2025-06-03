import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navBar">
        <ul className="navBarUL">
          <li>
            {" "}
            <Link to="/">Home</Link> <span></span>
          </li>
          <li>
            <Link to="/shop/cats">Cats</Link> <span></span>{" "}
          </li>
          <li>
            <Link to="/shop/dogs">Dogs</Link> <span></span>{" "}
          </li>
          <li>
            <Link to="/shop/other">Other</Link> <span></span>{" "}
          </li>
          <li>
            <Link to="/cart">Shopping Cart</Link>
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
