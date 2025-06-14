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

      {/* {name === "cats" ? <Cats /> : name === "dogs" ? <Dogs /> : <Default />} */}
      <Outlet />
    </div>
  );
};

export default Shop;
