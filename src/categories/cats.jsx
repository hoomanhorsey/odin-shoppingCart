import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import { getProductArray, getNewProductArray } from "../code/apiHelpers";

function Cats() {
  const parentContext = useOutletContext(); // get cart and setCart
  const [productArray, setProductArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductArray(data);
      // console.table(data);
    }
    fetchData();
  }, []);

  // const productArray = testData;
  // const [data, setData] = useState(null); // To store fetched data

  // const [newProductArray, setNewProductArray] = useState([]);

  // const productArray = getProductArray("https://fakestoreapi.com/products");

  return (
    <div className="catPage">
      <h1>Cat Page</h1>
      <div>
        Cats are lovely aren't they? <Link to="/">Click here to go back</Link>
      </div>

      <div className="productDisplay">
        {productArray.map((item) => (
          <div className="productCard">
            <Link to={`/cats/${item.id}`} key={item.id}>
              <div className="productDetails">
                {item.title} - ${item.price}{" "}
              </div>
              <div>
                {" "}
                <img className="productImageCatalogue" src={item.image}></img>
              </div>
              {/* <div className="productDescription">{item.description} </div> */}
            </Link>
          </div>
        ))}
      </div>

      <Outlet context={{ ...parentContext, productArray }} />
    </div>
  );
}
export { Cats };
