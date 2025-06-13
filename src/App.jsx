import { useState } from "react";
import { Outlet } from "react-router-dom";

import "./App.css";

import { NavBar } from "./navBar";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <NavBar cart={cart} />

      <Outlet context={{ cart, setCart }} />
    </div>
  );
}

export default App;
