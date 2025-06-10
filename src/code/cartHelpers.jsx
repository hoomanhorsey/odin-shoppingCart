const increaseQuantity = (cart, itemId) => {
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

const checkIfItemExists = (cart, itemId) => {
  return cart.find((item) => item.itemId === itemId);
};
export { increaseQuantity };
