// External libraries
import { Link } from "react-router-dom";

// Internal/local modules
import styles from "./ProductDisplay.module.css";

function ProductDisplay({ category, productArray }) {
  return (
    <>
      <div className={styles.productDisplay}>
        {productArray.map((item) => (
          <Link
            className={styles.productCard}
            to={`/${category}/${item.id}`}
            key={item.id}
          >
            <div className={styles.productImageContainer}>
              <img
                className={styles.productImageCatalogue}
                src={item.image}
              ></img>
            </div>
            <div className={styles.productDetails}>
              <div className={styles.productDetailsTitle}>{item.title} </div>
              <div className={styles.productDetailsPrice}>${item.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export { ProductDisplay };
