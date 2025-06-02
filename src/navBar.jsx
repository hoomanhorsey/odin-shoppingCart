import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navBar">
        <h3 className="navBar">navbar</h3>
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
            <br></br>
            <Link to="shop">Shop</Link>
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
