import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { useOutletContext } from "react-router-dom";

function ItemDetails() {
  return <input></input>;
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
      <h1>Item Page</h1>
      <ItemDetails />
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
