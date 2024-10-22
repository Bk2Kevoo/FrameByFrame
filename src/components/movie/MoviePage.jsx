import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import Search from "../functionality/Search"
import Dropdowns from "../functionality/Dropdowns";

function MoviePage() {
    const [movies, setMovies] = useState([]); // State to hold the list of movies, initialized as an empty array.
    const [searchQuery, setSearchQuery] = useState(""); 
    const [selectedGenre, setSelectedGenre] = useState("All"); // State for the selected genre filter, default is "All".
    const [selectedRating, setSelectedRating] = useState("All"); // State for the selected rating filter, initialized as an empty string.


    useEffect(() => { // useEffect to fetch movies when the component mounts.
        fetch("http://localhost:6001/movies") 
            .then((response) => response.json()) 
            .then((data) => setMovies(data)) // Updating the movies state with the fetched data.
            .catch((error) => console.log("Error", error)); // Logging any errors during the fetch.
    }, []); // Empty dependency array ensures this effect runs only once on mount.
 //dependency is the reactive value, when changed refires effect function
 //empty dependency only fires once 

 

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
            {/* // Rendering MovieList with the filtered list of movies. */}

            {filteredMovies.map((movie) => ( 
                <div key={movie.id}>
                    {/* <h3>{movie.name}</h3> */}
                {/* <VideoLikes upvotes={movie.upvotes} downvotes={movie.downvotes} /> */}
                </div>
            ))}
        </main>
    );
}

export default MoviePage;
