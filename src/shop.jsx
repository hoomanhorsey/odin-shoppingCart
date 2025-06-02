import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { NavBar } from "./navBar";

import { Link } from "react-router-dom";

import { Default } from "./default";

const Shop = () => {
  const { name } = useParams();

  return (
    <div>
      <NavBar />

      <h1>Shop Page</h1>
      <p>So, how are you?</p>

      <h2>The profile visited is here:</h2>

      <ul>
        <li>
          <Link to="cats">Cats page</Link>
        </li>
        <li>
          <Link to="dogs">Dog page</Link>
        </li>
      </ul>
      {/* {name === "cats" ? <Cats /> : name === "dogs" ? <Dogs /> : <Default />} */}
      <Outlet />
    </div>
  );
};

export default Shop;
