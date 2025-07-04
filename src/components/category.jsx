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
  const { category, itemId } = useParams();
  const parentContext = useOutletContext(); // get cart and setCart

  console.log(category, itemId);
  const { isLoading, productArray, error } = usePopulateProductArray(category);
  if (error) {
    return <Error error={error} />;
  }

  const sortedProductArray = sortProductArray(sortStatus, productArray);

  return (
    <div className="categoryPage">
      {!itemId && (
        <>
          {isLoading ? (
            <div className="loading">Loading items...</div>
          ) : (
            <>
              <CategoryHeading category={category} />
              <ProductSort setSortStatus={setSortStatus} />
              <ProductDisplay
                category={category}
                productArray={sortedProductArray}
              />
            </>
          )}
        </>
      )}

      <Outlet context={{ ...parentContext, productArray }} />
    </div>
  );
}
export { Category };
