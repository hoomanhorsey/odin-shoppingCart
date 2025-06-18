import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { useOutletContext } from "react-router-dom";

import {
  increaseQuantity,
  decreaseQuantity,
  cartCalc,
} from "../code/cartHelpers";

import { fetchAndAddNewItem } from "../code/cartHelpers";

function ItemDetails({ cart, setCart, itemId, product }) {
  const activeProduct = cart.find((item) => item.itemId === itemId);
  const quantityInCart = activeProduct ? activeProduct.quantity : 0;

  const [tempQuantity, setTempQuantity] = useState(1);
  // const [tempQuantity, setTempQuantity] = useState(quantityInCart);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Optional: Sync tempQuantity if itemId changes
  // useEffect(() => {
  //   setTempQuantity(activeProduct ? activeProduct.quantity : 0);
  // }, [itemId, cart]);

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
    console.log("called from inside module");
  };

  const handleSubtract = () => setTempQuantity((prev) => Math.max(1, prev - 1));

  const handleAdd = () => setTempQuantity((prev) => prev + 1);

  const handleSubmit = async () => {
    console.log("subbed");
    const itemExists = cart.some((item) => item.itemId === itemId);

    if (!itemExists) {
      console.log("need to make new item");
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
        console.log(prevCart);
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
        <AddToCartModal
          setIsModalOpen={setIsModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={product}
          activeProduct={activeProduct}
          tempQuantity={tempQuantity}
          cart={cart}
        >
          {/* modal content here */}
        </AddToCartModal>
      )}
    </>
  );
}

function AddToCartModal({
  setIsModalOpen,
  product,
  activeProduct,
  tempQuantity,
  cart,
}) {
  return (
    <div className="modalOverlay">
      <div className="addToCartModal">
        <button onClick={() => setIsModalOpen(false)} aria-label="Close modal">
          [x]
        </button>

        <div>{tempQuantity} item(s) added to your cart </div>
        <div>{cartCalc(cart)} item(s) in total in your cart </div>
        <div>Subtotal | [quantity] item(s)</div>
        <div>
          <Link to="/cart">View Cart </Link>
        </div>
        <button onClick={() => setIsModalOpen(false)} aria-label="Close modal">
          [Continue Shopping]
        </button>
        <button className="btn" onClick={() => setIsModalOpen(false)()}>
          Return to Item
        </button>
      </div>
    </div>
  );
}

function Item() {
  const { cart, setCart, productArray } = useOutletContext();
  const { itemId } = useParams();

  const [product, setProduct] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${itemId}`
        );
        if (!response.ok) throw new Error("Fetch failed");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchData();
  }, [itemId]);

  if (!product) return <div>Loading...</div>; // ✅ Avoid accessing null
  return (
    <div className="itemCard">
      <div>
        <Link to={`/${product.category}`}>[return to shopping]</Link>
      </div>
      <div>
        <h1>{product.title}</h1>
        <h2>${product.price}</h2>
        <div> {product.category}</div>
        <ItemDetails
          cart={cart}
          setCart={setCart}
          itemId={itemId}
          product={product}
        />
      </div>

      <div>
        <img className="productImageCard" src={product.image}></img>
      </div>
      <div>{product.description}</div>
      <div>
        <Link to={`/${product.category}`}>[return to shopping]</Link>
      </div>
    </div>
  );
}
export { Item };

// Keeping here to maintain the integer/number checks
const decreaseSelected = () => {
  setSelectedItems((prev) => {
    const next = Math.max(0, parseInt(prev || "0", 10) - 1);
    return next.toString();
  });
};
////////////////////////////////

const increaseSelected = () => {
  setSelectedItems((prev) => {
    const next = parseInt(prev || "0", 10) + 1;
    return next.toString();
  });
};
