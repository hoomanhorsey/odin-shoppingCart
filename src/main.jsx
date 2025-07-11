// External libraries
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Internal/local modules
import { App } from "./App.jsx";
import { Cart } from "./Cart.jsx";
import { Category } from "./components/category.jsx";
import { Home } from "./home.jsx";
import { Item } from "./components/Item.jsx";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { index: true, element: <Home /> },
      {
        path: ":category",
        element: <Category />,
        children: [{ path: ":itemId", element: <Item /> }],
      },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
