import { useEffect, useState, useRef } from "react";

export function useSearch() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === "";
      return;
    }

    if (query === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }

    if (query.length < 3) {
      setError("No se puede buscar una pelicula con menos de 3 caracteres");
      return;
    }

    setError(null);
  }, [query]);

  return { query, setQuery, error };
}
