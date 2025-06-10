import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { NavBar } from "./navBar";

import { useOutletContext } from "react-router-dom";

import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useOutletContext(); // get cart and setCart
  console.table(cart);

  // cart.map((item) => {
  //   console.log(item.quantity);
  //   // return <div>{item}</div>;
  // });
  let total = 0;

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((item) => {
        const subtotal = Number(item.price) * Number(item.quantity);
        total += subtotal;
        return (
          <div key={item.itemId}>
            {item.title}{" "}
            <img className="productImageCart" src={item.imageUrl}></img>:
            Quantity: {item.quantity} Price ${item.price} Subtotal $
            {Number(item.price) * Number(item.quantity)}
          </div>
        );
      })}
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
