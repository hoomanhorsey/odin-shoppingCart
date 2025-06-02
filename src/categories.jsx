import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { NavBar } from "./navBar";

const Categories = () => {
  const { name } = useParams();

  return (
    <div>
      <NavBar />

      <h1>Categories Page</h1>
      <p>So, how are you?</p>

      <h2>The profile visited is here:</h2>
      {name === "cats" ? <Cats /> : name === "dogs" ? <Dogs /> : <Default />}
    </div>
  );
};

export default Categories;
