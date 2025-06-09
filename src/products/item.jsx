import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { useOutletContext } from "react-router-dom";

function ItemDetails({ cart, setCart }) {
  const [selectedItems, setSelectedItems] = useState(0);

  // const decreaseSelected = () => {
  //   setSelectedItems((prev) => Math.max(0, Number(prev) - 1));
  // };

  const decreaseSelected = () => {
    setSelectedItems((prev) => {
      const next = Math.max(0, parseInt(prev || "0", 10) - 1);
      return next.toString();
    });
  };
  // const increaseSelected = () => {
  //   setSelectedItems((prev) => Number(prev) + 1);
  // };

  const increaseSelected = () => {
    setSelectedItems((prev) => {
      const next = parseInt(prev || "0", 10) + 1;
      return next.toString();
    });
  };
  const handleChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setSelectedItems(value);
    }
  };

  const addToCart = () => {
    console.log("add this to your cart");
    console.log(selectedItems);
    setCart(selectedItems);
  };
  return (
    <>
      {" "}
      <div>
        <button onClick={decreaseSelected} disabled={selectedItems <= 0}>
          -
        </button>
        <input type="text" value={selectedItems} onChange={handleChange} />
        <button onClick={increaseSelected}>+</button>
      </div>
      <div>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </>
  );
}

function Item() {
  const { cart, setCart, productArray } = useOutletContext();
  const { itemID } = useParams();

  const [product, setProduct] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${itemID}`
        );
        if (!response.ok) throw new Error("Fetch failed");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    console.log("hi");

    fetchData();
  }, [itemID]);

  // const product = productArray.find((item) => item.id === Number(itemID));

  if (!product) return <p>Loading...</p>; // ✅ Avoid accessing null
  return (
    <div className="itemCard">
      <Link to="/cats">[close]</Link>
      <h1>{product.title}</h1>
      <ItemDetails cart={cart} setCart={setCart} />
      <p>This is the params {itemID}</p>
      <img className="productImageCard" src={product.image}></img>

      <p>{product.description}</p>
      <p>
        <Link to="/cats">[close]</Link>
      </p>
    </div>
  );
}
export { Item };
