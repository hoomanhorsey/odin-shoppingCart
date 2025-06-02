import { useState } from "react";
import { Link } from "react-router-dom";

import "./App.css";

import { NavBar } from "./navBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <div>
        <h1>Hello from the main page of the app!</h1>
        <p>Here are some examples of links to other pages</p>
        <nav>
          <ul>
            <li>
              <Link to="profile">Profile page</Link>
            </li>
          </ul>
        </nav>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="categories">Shop by Categories</Link>
          </li>
        </ul>

        {/* <ul>
          <li>
            <Link to="cats">Cats page</Link>
          </li>
          <li>
            <Link to="dogs">Dog page</Link>
          </li>
        </ul> */}
      </nav>
    </div>
  );
}

export default App;
