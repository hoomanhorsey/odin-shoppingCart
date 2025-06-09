import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { NavBar } from "./navBar";

import { useOutletContext } from "react-router-dom";

import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useOutletContext(); // get cart and setCart
  console.log(cart);
  return (
    <div>
      <NavBar />

      <h1>Shopping Cart</h1>
      <div>{cart} </div>

      <div>This is the shopping cart</div>
      <Outlet />
    </div>
  );
};

export default Cart;
