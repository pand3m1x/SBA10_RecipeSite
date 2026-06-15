import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      alert("Empty Search...");
      return;
    }

    navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    setQuery("");
  };

  return (
    <nav id="Nav">
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {"|"}
        <li>
          <Link to="/favorites">Favorites ☆</Link>
        </li>
        {"|"}
        <li>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="search for recipe"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" style={{ marginLeft: "10px" }}>
              Search
            </button>
          </form>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
