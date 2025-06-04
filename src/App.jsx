import { useState } from "react";
import { Link } from "react-router-dom";

import "./App.css";

import { NavBar } from "./navBar";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <NavBar />
      <div>
        <h1>Consumer Purchase Site</h1>
        <div>
          <img
            src="src/assets/images/WhiskeyStairs.jpeg"
            alt="Whiskey cat on the stairs"
          />
        </div>

        <nav>
          <ul className="mainNavUL">
            <li>
              <Link to="/shop/cats">Shop Cats</Link>
            </li>
            <li>
              <Link to="/shop/dogs">Shop Dogs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
