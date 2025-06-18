// External libraries
import { useState, useEffect } from "react";
import { Link, Outlet, useParams, useOutletContext } from "react-router-dom";

// Internal/local modules
import { CategoryHeading } from "./categoryHeading";
import { ProductDisplay } from "./productDisplay";
import { usePopulateProductArray } from "./usePopulateProductArray";

function Category() {
  const { category } = useParams();
  const parentContext = useOutletContext(); // get cart and setCart

  const { isLoading, productArray } = usePopulateProductArray(category);

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
            <ProductDisplay category={category} productArray={productArray} />
          </div>
        </>
      )}
      <Outlet context={{ ...parentContext, productArray }} />
    </div>
  );
}
export { Category };
