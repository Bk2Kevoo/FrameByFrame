import React, { useState, useEffect } from "react";
import MovieList from "./MovieList"
// import Search from "./Search"

function MoviePage() {
    const [movies, setMovies] = useState([]);



    useEffect(() => {
        fetch("http://localhost:6001/movies")
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => { console.log(error) })
    }, []);



    return (
        <main>
            {/* <Search /> */}
            <MovieList movies={movies} />
        </main>
    )
}

export default MoviePage;