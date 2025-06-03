import { Link } from "react-router-dom";

function Item() {
  return (
    <div>
      <h1>Item Page</h1>
      <p>
        This is an item <Link to="/shop/cats">Click here to go back</Link>
      </p>
    </div>
  );
}
export { Item };
