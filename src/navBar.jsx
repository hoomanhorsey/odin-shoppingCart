import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <h3 className="navBar">navbar</h3>
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="categories/cats">Cats page</Link>
        </li>
        <li>
          {" "}
          <Link to="dogs">Dog page</Link>
        </li>
      </ul>
    </>
  );
}

export { NavBar };
