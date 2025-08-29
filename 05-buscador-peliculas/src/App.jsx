import "./style.css";
import { RenderMovies } from "./components/RenderMovies.jsx";
import { useMovies } from "./hooks/useMovies.jsx";
import { useSearch } from "./hooks/useSearch.jsx";
import { useCallback, useState } from "react";
import debounce from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false);
  const { query, setQuery, error } = useSearch();
  const { movies, getMovies } = useMovies({ query, sort });

  const debouncedGetMovies = useCallback(
    debounce((query) => {
      getMovies({ search: query });
    }, 300),
    []
  );

  const handleSort = () => {
    setSort(!sort);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    debouncedGetMovies(query);
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setQuery(newSearch);
    debouncedGetMovies(newSearch);
  };

  return (
    <div className="page">
      <header>
        <form onSubmit={handleSubmit}>
          <h1>Buscador de peliculas</h1>
          <label>Enter the movie name</label>
          <div className="searchInput">
            <input
              onChange={handleChange}
              value={query}
              placeholder={"Avengers, Star wars, The Matrix..."}
            />
            <input type="checkbox" onChange={handleSort} checked={sort} />
            <button type="submit">Search</button>
          </div>
        </form>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      </header>

      <main>
        <RenderMovies movies={movies} />
      </main>
    </div>
  );
}

export default App;
