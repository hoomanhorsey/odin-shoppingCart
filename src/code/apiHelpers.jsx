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

const fetchProductById = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return await res.json();
};

const getSingleProduct = (itemId) => {
  console.log("get single product is called");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${itemId}`
        );
        if (!response.ok) throw new Error("Fetch failed");
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchData();
  }, [itemId]);
};
export {
  getProductArray,
  getNewProductArray,
  getSingleProduct,
  fetchProductById,
};
