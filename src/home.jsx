import { Link } from "react-router-dom";

import style from "./home.module.css";

function Home() {
  return (
    <div className={style.homePage}>
      <div className={style.heroImageContainer}>
        <div className={`${style.heroImage} `}></div>
        {/* <img
        // className={style.homePageHeroImage}
        // src="/images/WhiskeyStairs.jpeg"
        // alt="Whiskey cat on the stairs"
        /> */}

        <div className={style.textOverlay}> Cato Shop!</div>
      </div>

      <nav className={style.homeNavBottom}>
        <ul className={style.homeNavUL}>
          <li>
            <Link to="/electronics">Shop Electronics</Link>
          </li>
          <li>
            <Link to="/jewelery">Shop Jewelry</Link>
          </li>
          <li>
            <Link to="/men%27s%20clothing">Shop Masc Fashion</Link>
          </li>
          <li>
            <Link to="/women%27s%20clothing">Shop Femme Fashion</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export { Home };
