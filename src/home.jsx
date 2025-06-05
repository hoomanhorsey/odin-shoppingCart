import { Link } from "react-router-dom";

function Home() {
  return (
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
            <Link to="/cats">Shop Cats</Link>
          </li>
          <li>
            <Link to="/dogs">Shop Dogs</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export { Home };
