import { useNavigate } from "react-router-dom";
import "./Styles.css";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

function Navbar() {
    const [search, setSearch] = useState("");

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(search)

        if(!search) return

        navigate(`/search?q=${search}`)
        setSearch("")
    }

  return (
    <nav className="container-navbar">
      <h1>FilmGo</h1>

      <form onSubmit={handleSubmit} className="container-search">
        <input
          type="text"
          placeholder="Buscar Filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <button className="search-button" type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
