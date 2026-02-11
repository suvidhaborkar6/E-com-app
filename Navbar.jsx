import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "20px", background: "#eee" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/add">Add Laptop</Link>
    </nav>
  );
};

export default Navbar;
