import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Consumer Purchase Site for Cat related Consumer Items</h1>
      <div>
        <img
          src="src/assets/images/WhiskeyStairs.jpeg"
          alt="Whiskey cat on the stairs"
        />
      </div>

      <nav>
        <ul className="mainNavUL">
          <li>
            <Link to="/electronics">Shop Electronics</Link>
          </li>
          <li>
            <Link to="/jewelery">Shop Jewelry</Link>
          </li>
          <li>
            <Link to="/men%27s%20clothing">Shop Men's Fashion</Link>
          </li>
          <li>
            <Link to="/women%27s%20clothing">Shop Women's Fashion</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export { Home };
