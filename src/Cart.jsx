import { useOutletContext } from "react-router-dom";

import {
  increaseQuantity,
  decreaseQuantity,
  handleQuantityChange,
} from "./code/cartHelpers";

import style from "./Cart.module.css";

const Cart = () => {
  const { cart, setCart } = useOutletContext(); // get cart and setCart

  let total = 0;

  return (
    <div className="categoryPage">
      <h1 className="categoryHeading">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div>
          Y'all ain't bought nuthin' yet. Go back to the catalogue and pick out
          some nice thangs
        </div>
      ) : (
        <>
          {cart.map((item) => {
            const subtotal = Number(item.price) * Number(item.quantity);
            total += subtotal;
            return (
              <div className={style.cartItem} key={item.itemId}>
                <img
                  className={style.productImageCart}
                  src={item.imageUrl}
                ></img>
                <div className={style.cartItemDetails}>
                  <div className={style.cartItemDetailsDescription}>
                    {item.title}
                  </div>
                  <div className={style.cartItemDetailsPrice}>
                    Price ${item.price.toFixed(2)}
                  </div>
                </div>
                <div className={style.cartItemQuantity}>
                  <div>Quantity</div>
                  <div className={style.cartItemQuantityBtns}>
                    <button
                      className="btnQuantity left"
                      onClick={() => decreaseQuantity(item.itemId, setCart)}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      className="inputQuantity"
                      value={item.quantity}
                      onChange={(event) =>
                        handleQuantityChange(event, item.itemId, cart, setCart)
                      }
                    />
                    <button
                      className="btnQuantity right"
                      onClick={() =>
                        increaseQuantity(item.itemId, setCart, cart)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className={style.cartSubtotal}>
                    Subtotal ${subtotal.toFixed(2)}
                  </div>
                </div>
              </div>
            );
          })}
          <h2 className={style.cartTotal}>Total: ${total.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
};

export { Cart };
