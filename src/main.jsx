import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { Home } from "./home.jsx";

import { Category } from "./categories/category.jsx";

import Cart from "./cart.jsx";

import { Item } from "./products/item.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { index: true, element: <Home /> },
      // {
      //   path: "cats",
      //   element: <Cats />,
      //   children: [{ path: ":itemId", element: <Item /> }],
      // },
      // {
      //   path: "dogs",
      //   element: <Dogs />,
      // },
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
