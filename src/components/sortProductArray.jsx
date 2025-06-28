function sortProductArray(sortStatus, productArray) {
  let sorted = [];

  if (sortStatus === "default") {
    return productArray;
  } else if (sortStatus === "priceAscending") {
    sorted = [...productArray].sort(
      (a, b) => Number(a.price) - Number(b.price)
    );

    return sorted;
  } else {
    sorted = [...productArray].sort(
      (a, b) => Number(b.price) - Number(a.price)
    );
    console.table(sorted);

    return sorted;
  }
}

export { sortProductArray };
