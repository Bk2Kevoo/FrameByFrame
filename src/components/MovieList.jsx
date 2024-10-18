import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
    const movieCards = movies.map(movie =>
        <MovieCard
            key={movie.id}
            movie={movie} />
    )
    return (
        <ul className="cards">
            {movieCards}
        </ul>
    )
}

export default MovieList;