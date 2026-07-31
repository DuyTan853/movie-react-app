import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: 20, background: "#333", color: "#fff" }}>
      <h2>Movie App</h2>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;