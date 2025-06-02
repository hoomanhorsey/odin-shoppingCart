import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { NavBar } from "./navBar";
import Shop from "./shop.jsx";
import { Default } from "./default.jsx";
import { Cats } from "./categories/cats.jsx";
import { Dogs } from "./categories/dogs.jsx";
import Profile from "./profile.jsx";
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
      },
      {
        path: "dogs",
        element: <Dogs />,
      },
    ],
  },
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
