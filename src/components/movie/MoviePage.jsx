import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import Search from "../functionality/Search";
import Dropdowns from "../functionality/Dropdowns";
import { useOutletContext } from "react-router-dom";

function MoviePage() {
    const [searchQuery, setSearchQuery] = useState(""); 
    const [selectedGenre, setSelectedGenre] = useState("All"); // State for the selected genre filter, default is "All".
    const [selectedRating, setSelectedRating] = useState("All"); // State for the selected rating filter, initialized as an empty string.
    const { movies } = useOutletContext()
   
    

    const handleSearch = (query) => setSearchQuery(query.toLowerCase()); // Function to handle search input, updates searchQuery state to lowercase.

    const filteredMovies = movies.filter((movie) => { // Filtering movies based on search, genre, and rating.
        const matchesSearch = movie.name.toLowerCase().includes(searchQuery); // Checks if movie name includes the search query.
        const matchesGenre = selectedGenre === "All" || movie.genre === selectedGenre; // Checks if genre matches the selected genre.
        const matchesRating = selectedRating === "All" || movie.rating === parseInt(selectedRating); // Checks if rating matches the selected rating.
        return matchesSearch && matchesGenre && matchesRating; // Returns true if all conditions are met.
    });

   
    

    return (
        <main>
            <Search onSearch={handleSearch} /> 
            {/* // Rendering Search component and passing the search handler. */}

            <Dropdowns
                selectedGenre={selectedGenre} // Passing selected genre to Dropdowns.
                handleGenreChange={setSelectedGenre} // Passing function to update selected genre.
                selectedRating={selectedRating} // Passing selected rating to Dropdowns.
                handleRatingChange={setSelectedRating} // Passing function to update selected rating.
            />

            <MovieList movies={filteredMovies} /> 

        </main>

  );
}

export default MoviePage;
