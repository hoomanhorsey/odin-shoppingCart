import { NavBar } from "../navBar";
import { Link } from "react-router-dom";

function Dogs() {
  return (
    <div>
      <h1>Dog Page</h1>
      <p>
        Dogs are silly aren't they? <Link to="/">Click here to go back</Link>
      </p>
    </div>
  );
}
export { Dogs };
