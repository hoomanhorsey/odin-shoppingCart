import { useState, useEffect } from "react";

async function fetchData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products/1");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    setData(result);
  } catch (err) {
    // setError(err.message || "Something went wrong");
  } finally {
    // setLoading(false);
  }
}

function getNewProductArray(apiEndpoint, setNewProductArray) {
  console.log("getProductArray called", apiEndpoint);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      setNewProductArray(data);
      console.log(data);
    }

    fetchData();
  }, []);
  console.table(newProductArray);

  // return newProductArray;
}

function getProductArray(apiEndpoint) {
  console.log("getProductArray called", apiEndpoint);

  const [productArray, setProductArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      setProductArray(data);
      console.log(data);
    }

    fetchData();
  }, []);

  return productArray;
}

export { getProductArray, getNewProductArray };
