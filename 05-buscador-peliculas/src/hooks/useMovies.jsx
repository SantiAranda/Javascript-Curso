import { useRef, useState, useMemo, useCallback } from "react";
import { fetchMovies } from "../services/movies";

export function useMovies({ query: search, sort }) {
  const [movies, setMovies] = useState([]);
  const lastSearch = useRef("");

  const getMovies = useCallback(
    async ({ search }) => {
      if (search === lastSearch.current) return;

      lastSearch.current = search;
      const newMovies = await fetchMovies({ search });
      setMovies(newMovies);
    },
    [search]
  );

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies };
}
