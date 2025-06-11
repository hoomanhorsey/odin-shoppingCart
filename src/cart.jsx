import { useOutletContext } from "react-router-dom";

import {
  increaseQuantity,
  decreaseQuantity,
  handleQuantityChange,
} from "./code/cartHelpers";

const Cart = () => {
  const { cart, setCart } = useOutletContext(); // get cart and setCart
  console.table(cart);

  if (cart.length === 0) {
    return (
      <div>
        Y'all ain't bought nuthin' yet. Go back to the catalogue and pick out
        some nice thangs
      </div>
    );
  }

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
            Quantity:
            <button
              onClick={() => decreaseQuantity(item.itemId, setCart)}
              // disabled={selectedItems <= 0}
            >
              -
            </button>
            <input
              type="text"
              className="quantity"
              value={item.quantity}
              onChange={(event) =>
                handleQuantityChange(event, item.itemId, cart, setCart)
              }
            />
            <button
              onClick={() => increaseQuantity(item.itemId, setCart, cart)}
            >
              +
            </button>
            {/* {item.quantity} */}
            Price ${item.price} Subtotal $
            {Number(item.price) * Number(item.quantity)}
          </div>
        );
      })}
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
