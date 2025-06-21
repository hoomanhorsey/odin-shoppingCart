// External libraries
import { useState, useEffect } from "react";
import { useMemo } from "react";
import { Link, Outlet, useParams, useOutletContext } from "react-router-dom";

// Internal/local modules
import { CategoryHeading } from "./categoryHeading";
import { Error } from "./error";
import { ProductDisplay } from "./productDisplay";
import { ProductSort } from "./productSort";
import { sortProductArray } from "./sortProductArray";
import { usePopulateProductArray } from "./usePopulateProductArray";

function Category() {
  const [sortStatus, setSortStatus] = useState("default");

  const { category } = useParams();

  const parentContext = useOutletContext(); // get cart and setCart

  const { isLoading, productArray, error } = usePopulateProductArray(category);
  console.log("Category render", category);
  if (error) {
    return <Error error={error} />;
  }

  console.log(sortStatus);

  const sortedProductArray = sortProductArray(sortStatus, productArray);

  return (
    <div className="categoryPage">
      {isLoading ? (
        <div className="loading">Loading {category}...</div>
      ) : (
        <>
          <div>
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
