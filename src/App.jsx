// External libraries
import { useState } from "react";
import { Outlet } from "react-router-dom";

// Internal/local modules
import { NavBar } from "./navBar";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <NavBar cart={cart} />
      <Outlet context={{ cart, setCart }} />
    </>
  );
}

export { App };
