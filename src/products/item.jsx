import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

function ItemDetails() {
  return "sdfsdf";
}

function Item() {
  const { name } = useParams();
  return (
    <div className="itemCard">
      <h1>Item Page</h1>
      <ItemDetails />
      <p>This is the params {name}</p>
      <p>
        This is an item <Link to="/shop/cats">Click here to go back</Link>
      </p>
    </div>
  );
}
export { Item };
