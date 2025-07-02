function CategoryHeading({ category }) {
  switch (category) {
    case "electronics":
      return (
        <div className="categoryHeading">
          <h1>Electronics</h1>
          <p>The latest gadgest and devices for cats.</p>
        </div>
      );
    case "jewelery":
      return (
        <div className="categoryHeading">
          <h1>Jewelery</h1>
          <p>A fine selection of stylish jewelery for cats.</p>
        </div>
      );
    case "men's clothing":
      return (
        <div className="categoryHeading">
          <h1>Men's Clothing</h1>
          <p>
            Our range of men's apparel has been carefully selected to appeal to
            cats.
          </p>
        </div>
      );
    case "women's clothing":
      return (
        <div className="categoryHeading">
          <h1>Women's Clothing</h1>
          <p>
            Our curated women's collection is fashion forward and approved by
            cats.
          </p>
        </div>
      );
    default:
      return (
        <div className="categoryHeading">
          <h1></h1>
          <p>
            Click on a category in the navigation bar to explore our quality
            range of cat related products.
          </p>
        </div>
      );
  }
}

export { CategoryHeading };
