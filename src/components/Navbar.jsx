import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "../app/store";

function Navbar() {
  const { cart } = useSelector((store) => store.cart);
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Navbar;
