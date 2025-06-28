// External libraries

import { useState } from "react";

// Internal/local modules
import { fetchAndAddNewItem } from "../code/cartHelpers";

import { AddToCartModalSep } from "./AddToCartModal";

function ItemDetailsSep({ cart, setCart, itemId, product }) {
  // Derived values
  const activeProduct = cart.find((item) => item.itemId === itemId);
  const quantityInCart = activeProduct ? activeProduct.quantity : 0;

  // Local state
  const [tempQuantity, setTempQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🧩 Quantity handlers
  const handleAdd = () => setTempQuantity((prev) => prev + 1);
  const handleSubtract = () => setTempQuantity((prev) => Math.max(1, prev - 1));
  const handleQuantityChange = (event, itemId) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setCart((prevCart) => {
        return prevCart.map((item) => {
          if (item.itemId === itemId) {
            return { ...item, quantity: value };
          }
          return item;
        });
      });
    }
  };

  // 🛒 Submission logic
  const handleSubmit = async () => {
    const itemExists = cart.some((item) => item.itemId === itemId);

    if (!itemExists) {
      await fetchAndAddNewItem(itemId, setCart);
      setCart((prevCart) => {
        console.log(prevCart);
        return prevCart.map((item) => {
          if (item.itemId === itemId) {
            return { ...item, quantity: tempQuantity };
          }
          return item;
        });
      });
    } else {
      setCart((prevCart) => {
        return prevCart.map((item) => {
          if (item.itemId === itemId) {
            console.log("added item from temp Quanitty");
            return { ...item, quantity: tempQuantity + quantityInCart };
          }

          return item;
        });
      });
    }
    setIsModalOpen(true); // open modal
  };

  return (
    <>
      <div>
        <button
          className="btnQuantity"
          onClick={() => handleSubtract()}
          disabled={tempQuantity <= 1}
        >
          -
        </button>
        <input
          type="text"
          className="quantity"
          value={tempQuantity}
          onChange={(event) => handleQuantityChange(event, itemId)}
        />
        <button className="btnQuantity" onClick={() => handleAdd()}>
          +
        </button>
      </div>
      <div>
        <button className="btnAddCart" onClick={() => handleSubmit()}>
          Add to Cart
        </button>
      </div>

      <h2>Sub Total: ${(tempQuantity * product.price).toFixed(2)}</h2>

      {/* Modal rendered only if isModalOpen is true */}
      {isModalOpen && (
        <AddToCartModalSep
          setIsModalOpen={setIsModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={product}
          activeProduct={activeProduct}
          tempQuantity={tempQuantity}
          cart={cart}
        ></AddToCartModalSep>
      )}
    </>
  );
}

export { ItemDetailsSep };
