function CategoryHeading({ category }) {
  switch (category) {
    case "electronics":
      return (
        <>
          <h1>Electronics</h1>
          <p>Discover the latest gadgets and devices.</p>
        </>
      );
    case "jewelery":
      return (
        <>
          <h1>Jewelery</h1>
          <p>Add some sparkle to your life with our fine selection.</p>
        </>
      );
    case "men's clothing":
      return (
        <>
          <h1>Men's Clothing</h1>
          <p>Dress to impress with our range of men's apparel.</p>
        </>
      );
    case "women's clothing":
      return (
        <>
          <h1>Women's Clothing</h1>
          <p>Stay stylish with our curated women's collection.</p>
        </>
      );
    default:
      return (
        <>
          <h1>Products</h1>
          <p>Explore our full range of quality items.</p>
        </>
      );
  }
}

export { CategoryHeading };
