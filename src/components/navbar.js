import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/admin" style={{ marginRight: "10px" }}>Admin Dashboard</Link>
      <Link to="/customer">Customer Dashboard</Link>
      <Link to="/admin-login" style={{ marginRight: "10px" }}>Admin Login</Link>
      <Link to="/customer-login">Customer Login</Link>

    </nav>
  );
}

export default Navbar;
