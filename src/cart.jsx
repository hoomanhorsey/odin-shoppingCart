import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { NavBar } from "./navBar";

import { Link } from "react-router-dom";

const Cart = () => {
  const { name } = useParams();

  return (
    <div>
      <NavBar />

      <h1>Shopping Cart</h1>

      <div>This is the shopping cart</div>
      <Outlet />
    </div>
  );
};

export default Cart;
