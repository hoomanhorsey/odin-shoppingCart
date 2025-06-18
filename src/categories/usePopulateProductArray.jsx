import { useState, useEffect } from "react";

function usePopulateProductArray(category) {
  const [isLoading, setIsLoading] = useState(true);
  const [productArray, setProductArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true); // Start loading
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();
      setProductArray(data);
      setIsLoading(false); // Done loading
    }
    fetchData();
  }, [category]);

  return { isLoading, productArray };
}

export { usePopulateProductArray };

// Nice, I see you want to keep it conceptual — here are some ideas to improve your hook without diving into code:

//     Error Handling: Add a way for the hook to track and expose any fetch errors. This could help your component display meaningful error messages or fallback UI if the request fails.

//     Cancellation / Cleanup: If the component unmounts before the fetch finishes (or if category changes quickly), add logic to cancel or ignore stale fetch results. This prevents setting state on unmounted components, avoiding memory leaks or warnings.

//     Caching: If users switch between categories frequently, you might consider caching results inside the hook or an external store to avoid redundant network calls and improve performance.

//     Parameter Validation: Ensure the input parameter (category) is valid before making a request (e.g., non-empty string), which can avoid unnecessary or erroneous fetches.

//     Configurable Fetch: Allow passing additional options or parameters (like a base URL or headers) to make the hook more flexible for different APIs or future needs.

//     Loading States Granularity: Instead of a single isLoading flag, consider states like idle, loading, success, error to provide finer control and better UX feedback.

//     Data Transformation: The hook could optionally provide a way to transform or normalize the fetched data before returning it, keeping the component simpler.

//     Testing: Make sure the hook is easily testable by isolating side effects and using mocks for fetch calls.

// These enhancements help your hook be more robust, flexible, and ready for edge cases — even if you don't reuse it across components, it makes your codebase healthier and your user experience smoother.
