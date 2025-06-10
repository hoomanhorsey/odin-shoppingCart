import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { useOutletContext } from "react-router-dom";

function ItemDetails({ cart, setCart, itemId, product }) {
  const decreaseQuantity = () => {
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
  ////////////////////////////

  const increaseQuantity = () => {
    console.log(itemId);

    if (!checkIfItemExists(cart, itemId)) {
      console.log("need to create a new one");
      addNewItemToCart(itemId);
    }
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.itemId === itemId) {
          return { ...item, quantity: Number(item.quantity) + 1 };
        }
        return item;
      });
    });
  };

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
    console.log(value);
  };

  const addNewItemToCart = (itemId) => {
    console.log("created a new one!");
    setCart((prevCart) => {
      return [
        ...prevCart,
        {
          itemId: itemId,
          quantity: 0,
          imageUrl: product.image,
          title: product.title,
          price: product.price,
        },
      ];
    });
  };

  const checkIfItemExists = (cart, itemId) => {
    return cart.find((item) => item.itemId === itemId);
  };
  const addToCart = () => {
    console.log("add this to your cart");

    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.itemId === itemId);

      if (itemExists) {
        return prevCart.map((item) => {
          if (item.itemId === itemId) {
            return { ...item, quantity: selectedItems };
          }
          return item;
        });
      } else {
        return [
          ...prevCart,
          {
            itemId: itemId,
            quantity: selectedItems,
            imageUrl: product.image,
            title: product.title,
            price: product.price,
          },
        ];
      }
    });
  };

  const existingItem = cart.find((item) => item.itemId === itemId);
  const quantityInCart = existingItem ? existingItem.quantity : 0;

  return (
    <>
      <div>
        <button
          onClick={() => decreaseQuantity(itemId)}
          // disabled={selectedItems <= 0}
        >
          -
        </button>

        <input
          type="text"
          value={quantityInCart}
          onChange={(event) => handleQuantityChange(event, itemId)}
        />

        <button onClick={() => increaseQuantity(itemId)}>+</button>
      </div>

      <h2>
        Sub Total: $
        {!existingItem ? 0 : (quantityInCart * existingItem.price).toFixed(2)}
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
  console.table(product);
  // const product = productArray.find((item) => item.id === Number(itemID));

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
      <img className="productImageCard" src={product.image}></img>

      <p>{product.description}</p>
      <p>
        <Link to="/cats">[return to shopping]</Link>
      </p>
    </div>
  );
}
export { Item };
