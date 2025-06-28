function CategoryHeading({ category }) {
  switch (category) {
    case "electronics":
      return (
        <>
          <h1>Electronics</h1>
          <p>The latest gadgest and devices for cats.</p>
        </>
      );
    case "jewelery":
      return (
        <>
          <h1>Jewelery</h1>
          <p>A fine selection of stylish jewelery for cats.</p>
        </>
      );
    case "men's clothing":
      return (
        <>
          <h1>Men's Clothing</h1>
          <p>
            Our range of men's apparel has been carefully selected to appeal to
            cats.
          </p>
        </>
      );
    case "women's clothing":
      return (
        <>
          <h1>Women's Clothing</h1>
          <p>
            Our curated women's collection is fashion forward and approved by
            cats.
          </p>
        </>
      );
    default:
      return (
        <>
          <h1></h1>
          <p>
            Click on a category in the navigation bar to explore our quality
            range of cat related products.
          </p>
        </>
      );
  }
}

export { CategoryHeading };
