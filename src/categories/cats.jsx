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
    <div>
      <h1>Cat Page</h1>
      <p>
        Cats are lovely aren't they? <Link to="/">Click here to go back</Link>
      </p>

      <div className="productDisplay">
        {productArray.map((item) => (
          <Link to={`/cats/${item.id}`} key={item.id}>
            <div className="productCard">
              <div className="productDetails">
                {item.title} - ${item.price}{" "}
              </div>
              <div>
                {" "}
                <img className="productImageCatalogue" src={item.image}></img>
              </div>
              {/* <div className="productDescription">{item.description} </div> */}
            </div>
          </Link>
        ))}
      </div>

      <div>
        {" "}
        <Link to="/cats/item">Click on item</Link>
      </div>
      <Outlet context={{ ...parentContext, productArray }} />
    </div>
  );
}
export { Cats };
