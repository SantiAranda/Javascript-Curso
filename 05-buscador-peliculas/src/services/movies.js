const API_KEY = "4287ad07";
const API_URL = "http://www.omdbapi.com/?apikey=";

export async function fetchMovies({ search }) {
  if (search === "") return null;

  try {
    return fetch(`${API_URL}${API_KEY}&s=${search}`).then((res) =>
      res.json().then((json) => {
        const movies = json.Search;

        return movies?.map((movie) => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster,
        }));
      })
    );
  } catch (error) {
    throw new Error("Error searching movies");
  }
}
