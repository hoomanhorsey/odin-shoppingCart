import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { getProductArray } from "../code/apiHelpers";

function Cats() {
  // const [productArray, setProductArray] = useState("boo");

  const [data, setData] = useState(null); // To store fetched data

  const productArray = getProductArray("https://fakestoreapi.com/products");

  console.table(productArray);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://fakestoreapi.com/products/1");

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }

  //       const result = await response.json();
  //       setData(result);
  //     } catch (err) {
  //       // setError(err.message || "Something went wrong");
  //     } finally {
  //       // setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // console.log(data.title);
  return (
    <div>
      <h1>Cat Page</h1>
      <p>
        Cats are lovely aren't they? <Link to="/">Click here to go back</Link>
      </p>

      <div className="productDisplay">
        {productArray.map((item) => (
          <div className="productCard" key={item.id}>
            <div className="productDetails">
              {item.title} - ${item.price}{" "}
            </div>
            <div>
              {" "}
              <img className="productImage" src={item.image}></img>
            </div>
            <div className="productDescription">{item.description} </div>
          </div>
        ))}
      </div>

      <div>
        {" "}
        <Link to="/shop/cats/item">Click on item</Link>
      </div>
      <Outlet />
    </div>
  );
}
export { Cats };
