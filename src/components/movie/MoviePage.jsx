import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import Search from "../Search"
import Dropdowns from "../Dropdowns";

function MoviePage() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("All");
    const [selectedRating, setSelectedRating] = useState("");

    //fetch movies 
    useEffect(() => {
        fetch("http://localhost:6001/movies")
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.log("Error", error));
    }, []);

    //handles search input
    const handleSearch = (query) => setSearchQuery(query.toLowerCase());

    // Filtered movies based on search, genre, and rating
    const filteredMovies = movies.filter((movie) => {
        const matchesSearch = movie.name.toLowerCase().includes(searchQuery);
        const matchesGenre = selectedGenre === "All" || movie.genre === selectedGenre;
        const matchesRating = selectedRating === "" || movie.rating === parseInt(selectedRating);
        return matchesSearch && matchesGenre && matchesRating;
    });



    return (
        <main>
            <Search onSearch={handleSearch} />

            <Dropdowns
                selectedGenre={selectedGenre}
                handleGenreChange={setSelectedGenre}
                selectedRating={selectedRating}
                handleRatingChange={setSelectedRating} />

            <MovieList movies={filteredMovies} />
        </main>
    );
}

export default MoviePage;