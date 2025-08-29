function ListOfMovies ({ movies }) {
  return (
    <ul className="mainContent">
      {
        movies.map(movie => (
          <li  key={movie.id}>
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </li>
        ))
      }
    </ul>
  )
}

function NoResults() {
  return <p>No se ha encontrado peliculas para esta busqueda...</p>
}

export function RenderMovies({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies ? <ListOfMovies movies={movies} /> : <NoResults />
  )
}