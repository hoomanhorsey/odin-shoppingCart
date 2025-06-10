import { useOutletContext } from "react-router-dom";

const decreaseQuantity = (itemId, setCart) => {
  setCart((prevCart) => {
    return prevCart.map((item) => {
      if (item.itemId === itemId) {
        if (Number(item.quantity > 0)) {
          return { ...item, quantity: Number(item.quantity) - 1 };
        } else {
          return item;
        }
      }
      return item;
    });
  });
};

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
            <input value={item.quantity} />{" "}
            <button onClick={() => increaseQuantity(itemId)}>+</button>
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
