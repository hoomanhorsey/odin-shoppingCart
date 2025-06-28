import { Link } from "react-router-dom";

import styles from "./home.module.css";

function Home() {
  return (
    <div className="categoryPage">
      <h1 className="categoryHeading">
        Consumer Purchase Site for Cat related Consumer Items, but not really a
        shop, you can't buy anything, it's just a site for learning about React
        Router and it uses a fake store API to populate it with fake items but
        below is a picture of a nice cat.
      </h1>
      <div>
        <img
          className={styles.homePageHeroImage}
          src="src/assets/images/WhiskeyStairs.jpeg"
          alt="Whiskey cat on the stairs"
        />
      </div>

      <nav>
        <ul className="homeNavUL">
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
