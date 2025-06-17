import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

// import { getProductArray, getNewProductArray } from "../code/apiHelpers";
import { useParams } from "react-router-dom";
import { CategoryHeading } from "./categoryHeading";

function Category() {
  const { category } = useParams();

  const parentContext = useOutletContext(); // get cart and setCart
  const [isLoading, setIsLoading] = useState(true);
  const [productArray, setProductArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true); // Start loading
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );

      // const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductArray(data);
      setIsLoading(false); // Done loading
    }
    fetchData();
  }, [category]);

  return (
    <div className="categoryPage">
      {/* <CategoryHeading category={category} /> */}

      {isLoading ? (
        <div className="loading">Loading category...</div>
      ) : (
        <>
          <div>
            <CategoryHeading category={category} />
          </div>

          <div className="productDisplay">
            {productArray.map((item) => (
              <div className="productCard">
                <Link to={`/${category}/${item.id}`} key={item.id}>
                  <div className="productDetails">
                    {item.title} - ${item.price}
                  </div>
                  <div>{item.category}</div>
                  <div>
                    {" "}
                    <img
                      className="productImageCatalogue"
                      src={item.image}
                    ></img>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}

      <Outlet context={{ ...parentContext, productArray }} />
    </div>
  );
}
export { Category };
