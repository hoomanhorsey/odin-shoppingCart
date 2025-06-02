import { NavBar } from "../navBar";
import { Link } from "react-router-dom";

function Cats() {
  return (
    <div>
      <h1>Cat Page</h1>
      <p>
        Cats are lovely aren't they? <Link to="/">Click here to go back</Link>
      </p>
    </div>
  );
}
export { Cats };
