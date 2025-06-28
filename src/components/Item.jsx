// External libraries
import { Link, useParams, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

// Internal/local modules
import { ItemDetailsSep } from "./ItemDetails";

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
        <ItemDetailsSep
          cart={cart}
          setCart={setCart}
          itemId={itemId}
          product={product}
        />
      </div>

      <div>
        <img className="productImageCard" src={product.image} />
      </div>
      <div>{product.description}</div>
    </div>
  );
}
export { Item };
