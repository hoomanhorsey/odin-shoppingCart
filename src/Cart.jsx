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
                <div className={style.cartItemImage}>
                  <img className="productImageCart" src={item.imageUrl}></img>
                </div>
                <div className={style.cartItemDetails}>
                  <div className={style.cartItemDetailsStack}>
                    <div className={style.cartItemDetailsDescription}>
                      {item.title}
                    </div>
                    <div className={style.cartItemDetailsPrice}>
                      Price ${item.price}
                    </div>
                  </div>
                </div>
                <div className={style.cartItemQuantity}>
                  <div className={style.cartItemQuantityStack}>
                    <div>Quantity</div>
                    <div className={style.cartItemQuantityBtns}>
                      <div>
                        <button
                          onClick={() => decreaseQuantity(item.itemId, setCart)}
                          // disabled={selectedItems <= 0}
                        >
                          -
                        </button>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="quantity"
                          value={item.quantity}
                          onChange={(event) =>
                            handleQuantityChange(
                              event,
                              item.itemId,
                              cart,
                              setCart
                            )
                          }
                        />
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            increaseQuantity(item.itemId, setCart, cart)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div>
                      {" "}
                      Subtotal ${Number(item.price) * Number(item.quantity)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <h2>Total: ${total.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
};

export { Cart };
