import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import Search from "./Search";

function MoviePage() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");



    useEffect(() => {
        fetch("http://localhost:6001/movies")
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => { console.log(error) })
    }, []);

    const handleSearch = (query) => setSearchQuery(query.toLowerCase());

    const filteredMovies = movies.filter((movie) =>
      movie.name.toLowerCase().includes(searchQuery)
  );

    return (
        <main>
            <Search onSearch={handleSearch} />
            <MovieList movies={filteredMovies} /> 
        </main>
    );
}

export default MoviePage;