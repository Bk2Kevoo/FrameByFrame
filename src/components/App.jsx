import React, { useState } from "react";
import Header from "./navigation/Header";
import MoviePage from "./movie/MoviePage";
import { Outlet } from "react-router-dom";

function App() { 

    const [isDarkMode, setIsDarkMode] = useState(true); // useState hook to manage the dark mode state, initialized to true (dark mode on).
    // const [movies, setMovies] = useState([]); // Uncommenting this line would initialize state to manage a list of movies.

    const toggleDarkMode = () => setIsDarkMode(current => !current); // Function to toggle the dark mode state. It uses the current state to flip it.

    const handleViewMovies = (updatedMovie) => { // Function to update the list of movies when a movie's details are modified.
        const updatedArray = movies.map(movie => // Creating a new array by mapping over the existing movies array.
            movie.id === updatedMovie.id ? updatedMovie : movie // If the movie id matches the updatedMovie's id, replace it; otherwise, keep the original.
        );
        setMovies(updatedArray); // Updating the movies state with the new array of movies.
    };

    return (
        <div className={isDarkMode ? "App" : "App light"}> 
        {/* // Applying a CSS class based on the dark mode state. If true, use "App"; otherwise, "App light". */}
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
             {/* // Rendering the Header component and passing down the dark mode state and toggle function as props. */}
            {/* // Rendering the MoviePage component, which displays the main content of the application. */}
            <Outlet context={{handleViewMovies}}/> 
            {/* // Outlet component for rendering child routes, passing down the handleViewMovies function in the context for nested components to access. */}
        </div>
    );
}

export default App;

