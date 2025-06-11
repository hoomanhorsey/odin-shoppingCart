import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { useOutletContext } from "react-router-dom";

import { increaseQuantity, decreaseQuantity } from "../code/cartHelpers";

import { fetchAndAddNewItem } from "../code/cartHelpers";

function ItemDetails({ cart, setCart, itemId, product }) {
  console.log(itemId);
  console.log(product);
  const activeProduct = cart.find((item) => item.itemId === itemId);
  console.table(activeProduct);
  const quantityInCart = activeProduct ? activeProduct.quantity : 0;
  const [tempQuantity, setTempQuantity] = useState(quantityInCart);

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

  const handleSubtract = () => setTempQuantity((prev) => Math.max(0, prev - 1));

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
            return { ...item, quantity: tempQuantity };
          }

          return item;
        });
      });
    }
  };

  return (
    <>
      <div>
        <button
          className="btnQuantity"
          onClick={() => handleSubtract()}
          // disabled={selectedItems <= 0}
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

        <button className="btnAddToCart" onClick={() => handleSubmit()}>
          Add to Cart
        </button>
      </div>
      {/* 
      <div>
        <button
          className="btnQuantity"
          onClick={() => decreaseQuantity(itemId, setCart)}
          // disabled={selectedItems <= 0}
        >
          -
        </button>

        <input
          type="text"
          className="quantity"
          value={quantityInCart}
          onChange={(event) => handleQuantityChange(event, itemId)}
        />

        <button
          className="btnQuantity"
          onClick={() => increaseQuantity(itemId, setCart, cart)}
        >
          +
        </button>
      </div> */}

      <h2>
        Sub Total: ${(tempQuantity * product.price).toFixed(2)}
        {/* {!activeProduct ? 0 : (tempQuantity * product.price).toFixed(2)} */}
      </h2>
    </>
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

  if (!product) return <p>Loading...</p>; // ✅ Avoid accessing null
  return (
    <div className="itemCard">
      <Link to="/cats">[return to shopping]</Link>
      <h1>{product.title}</h1>
      <h2>${product.price}</h2>
      <ItemDetails
        cart={cart}
        setCart={setCart}
        itemId={itemId}
        product={product}
      />
      <div>
        {" "}
        <Link to="/cats" className="btnAddCart">
          Add item(s) to cart, return to shop
        </Link>
      </div>

      <div>
        <img className="productImageCard" src={product.image}></img>
      </div>
      <p>{product.description}</p>
      <p>
        <Link to="/cats">[return to shopping]</Link>
      </p>
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
