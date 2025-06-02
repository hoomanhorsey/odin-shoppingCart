import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { NavBar } from "./navBar";
import Categories from "./categories.jsx";
import { Default } from "./default.jsx";
import { Cats } from "./categories/cats.jsx";
import { Dogs } from "./categories/dogs.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "categories/:name",
    element: <Categories />,
  },
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
