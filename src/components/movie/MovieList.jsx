import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) { // Functional component that receives a 'movies' prop, which is expected to be an array of movie objects.
    // Using the map method to iterate over the movies array and create an array of MovieCard components.
    const movieCards = movies.map(movie => 
        <MovieCard // Rendering the MovieCard component for each movie in the movies array.
            key={movie.id} // The 'key' prop helps React identify which items have changed, are added, or are removed.
            movie={movie} // Passing the individual movie object to the MovieCard component as a prop.
        />
    );

    return (
        <ul className="cards"> 
        {/* // UL to hold movie cards */}
            {movieCards} 
            {/* // Rendering the array of MovieCard components within the unordered list. */}
        </ul>
    );
}

export default MovieList;