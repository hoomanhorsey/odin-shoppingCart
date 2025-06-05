import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { Home } from "./home.jsx";
import { Cats } from "./categories/cats.jsx";
import { Dogs } from "./categories/dogs.jsx";
import Cart from "./cart.jsx";

import { Item } from "./products/item.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { index: true, element: <Home /> },
      {
        path: "cats",
        element: <Cats />,
        children: [{ path: ":itemID", element: <Item /> }],
      },
      {
        path: "dogs",
        element: <Dogs />,
      },
    ],
  },
  { path: "cart", element: <Cart /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
