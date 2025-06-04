import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Shop from "./shop.jsx";
import { Cats } from "./categories/cats.jsx";
import { Dogs } from "./categories/dogs.jsx";
import Cart from "./cart.jsx";
import Profile from "./profile.jsx";

import { Item } from "./products/item.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "profile", element: <Profile /> },

  {
    path: "shop",
    element: <Shop />,
    children: [
      {
        path: "cats",
        element: <Cats />,
        children: [{ path: ":name", element: <Item /> }],
      },
      {
        path: "dogs",
        element: <Dogs />,
      },
    ],
  },
  { path: "cart", element: <Cart /> },
  // {
  //   path: "categories/:name",
  //   element: <Categories />,
  // },
  // {
  //   path: "categories",
  //   element: <Categories />,
  //   children: [
  //     { index: true, element: <Default /> },
  //     {
  //       path: "cats",
  //       element: <Cats />,
  //     },
  //     {
  //       path: "dogs",
  //       element: <Dogs />,
  //     },
  //   ],
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
