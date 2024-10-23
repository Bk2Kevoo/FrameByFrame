import React, { useState } from "react";
import Header from "./navigation/Header";
import { Outlet } from "react-router-dom";

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(true);

  // const toggleDarkMode = () => setIsDarkMode(current => !current); // Function to toggle the dark mode state. It uses the current state to flip it.

  const handleViewMovies = (updatedMovie) => {
    // Function to update the list of movies when a movie's details are modified.
    const updatedArray = movies.map(
      (
        movie // Creating a new array by mapping over the existing movies array.
      ) => (movie.id === updatedMovie.id ? updatedMovie : movie) // If the movie id matches the updatedMovie's id, replace it; otherwise, keep the original.
    );
    setMovies(updatedArray); // Updating the movies state with the new array of movies.
  };

  return (
    <div className="movie-page">
      <Header />
      <Outlet context={{ handleViewMovies }} />
    </div>
  );
}

export default App;
