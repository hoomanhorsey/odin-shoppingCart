// External libraries
import { Link, useParams, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

// Internal/local modules
import { ItemDetails } from "./ItemDetails";

function Item() {
  const { cart, setCart } = useOutletContext();
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
    <ItemDetails
      cart={cart}
      setCart={setCart}
      itemId={itemId}
      product={product}
    />
  );
}
export { Item };
