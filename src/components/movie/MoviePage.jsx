import React, { useState, useEffect } from "react";
import MovieList from "./MovieList"
import Search from "./Search"

function MoviePage() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState([]);

    //fetch movies 
    useEffect(() => {
        fetch("http://localhost:6001/movies")
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.log("Error", error));
    }, []);

    //handles search input
    const handleSearch = (query) => setSearchQuery(query.toLowerCase());


    return (
        <main>
            <Search onSearch={handleSearch} />
            <MovieList movies={movies} />
        </main>
    );
}

export default MoviePage;