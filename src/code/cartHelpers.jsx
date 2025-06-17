// const increaseQuantity = (itemId, setCart) => {
//   console.log(itemId);

//   if (!checkIfItemExists(cart, itemId)) {
//     console.log("need to create a new one");
//     addNewItemToCart(itemId);
//   }
//   setCart((prevCart) => {
//     return prevCart.map((item) => {
//       if (item.itemId === itemId) {
//         return { ...item, quantity: Number(item.quantity) + 1 };
//       }
//       return item;
//     });
//   });
// };

import { getSingleProduct, fetchProductById } from "./apiHelpers";

// inside your click handler or cart logic
const handleAddToCart = async (itemId) => {
  try {
    const product = await fetchProductById(itemId);
    setCart((prev) => [...prev, { ...product, quantity: 1 }]);
  } catch (err) {
    console.error("Error fetching product:", err);
  }
};

const fetchAndAddNewItem = async (itemId, setCart) => {
  console.log("fetchAnd Add New Item called");
  const product = await fetchProductById(itemId);
  addNewItemToCart(itemId, setCart, product);
};

const increaseQuantity = async (itemId, setCart, cart) => {
  const itemExists = cart.some((item) => item.itemId === itemId);

  if (!itemExists) {
    console.log("item doesnexists, add new entry to cart");
    await fetchAndAddNewItem(itemId, setCart);
    // let product = await fetchProductById(itemId);
    // addNewItemToCart(itemId, setCart, product);
  } else {
    console.log("item exists, add to cart");
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.itemId === itemId) {
          return { ...item, quantity: Number(item.quantity) + 1 };
        }
        return item;
      });
    });
  }
};
const checkIfItemExists = (cart, itemId) => {
  return cart.find((item) => item.itemId === itemId);
};

const decreaseQuantity = (itemId, setCart) => {
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

const handleQuantityChange = async (event, itemId, cart, setCart) => {
  const itemExists = cart.some((item) => item.itemId === itemId);

  if (!itemExists) {
    console.log("item doesnexists, add new entry to cart");
    await fetchAndAddNewItem(itemId, setCart);
  }

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
  console.log("called from module");
};

const addNewItemToCart = (itemId, setCart, product) => {
  console.log("created a new one!");
  setCart((prevCart) => {
    return [
      ...prevCart,
      {
        itemId: itemId,
        quantity: 1,
        imageUrl: product.image,
        title: product.title,
        price: product.price,
      },
    ];
  });
};

function cartCalc(cart) {
  return cart.reduce((sum, product) => {
    return sum + product.quantity;
  }, 0);
}
export {
  decreaseQuantity,
  increaseQuantity,
  handleQuantityChange,
  addNewItemToCart,
  fetchAndAddNewItem,
  cartCalc,
};
