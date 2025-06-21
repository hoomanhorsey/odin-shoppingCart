// External libraries

import { Link } from "react-router-dom";

function ProductDisplay({ category, productArray }) {
  return (
    <>
      <div className="productDisplay">
        {productArray.map((item) => (
          <Link
            className="productCard"
            to={`/${category}/${item.id}`}
            key={item.id}
          >
            <div>
              <img className="productImageCatalogue " src={item.image}></img>
            </div>
            <div className="productDetails">
              <div className="productDetailsTitle">{item.title} </div>
              <div className="productDetailsPrice">${item.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export { ProductDisplay };
