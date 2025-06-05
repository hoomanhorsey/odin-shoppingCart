import { useState } from "react";
import { Outlet } from "react-router-dom";

import "./App.css";

import { NavBar } from "./navBar";

function App() {
  const [cart, setCart] = useState([5]);

  return (
    <div>
      <NavBar />
      <Outlet context={{ cart, setCart }} />
    </div>
  );
}

export default App;
