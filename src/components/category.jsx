// External libraries
import { useState } from "react";
import { Outlet, useParams, useOutletContext } from "react-router-dom";

// Internal/local modules
import { CategoryHeading } from "./categoryHeading.jsx";
import { Error } from "./error.jsx";
import { ProductDisplay } from "./ProductDisplay.jsx";
import { ProductSort } from "./ProductSort.jsx";
import { sortProductArray } from "./sortProductArray.jsx";
import { usePopulateProductArray } from "./usePopulateProductArray.jsx";

function Category() {
  const [sortStatus, setSortStatus] = useState("default");
  const { category } = useParams();
  const parentContext = useOutletContext(); // get cart and setCart

  const { isLoading, productArray, error } = usePopulateProductArray(category);
  if (error) {
    return <Error error={error} />;
  }

  const sortedProductArray = sortProductArray(sortStatus, productArray);

  return (
    <div className="categoryPage">
      {isLoading ? (
        <div className="loading">Loading {category}...</div>
      ) : (
        <>
          <div className="categoryHeading">
            <CategoryHeading category={category} />
          </div>
          <div>
            <ProductSort setSortStatus={setSortStatus} />
          </div>
          <div>
            <ProductDisplay
              category={category}
              productArray={sortedProductArray}
            />
          </div>
        </>
      )}
      <Outlet context={{ ...parentContext, productArray }} />
    </div>
  );
}
export { Category };
