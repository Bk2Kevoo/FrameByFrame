import React, { useState } from "react";
import Header from "./navigation/Header";
// import MoviePage from "./movie/MoviePage";
import { Outlet } from "react-router-dom";

function App() {

    const [isDarkMode, setIsDarkMode] = useState(true);
    const [movies, setMovies] = useState([]);

    const toggleDarkMode = () => setIsDarkMode(current => !current);

    const handleViewMovies = (updatedMovie) => {
        const updatedArray = movies.map(movie => 
            movie.id === updatedMovie.id ? updatedMovie : movie
        );
        setMovies(updatedArray);
    };

    return (
        <div className={isDarkMode ? "App" : "App light"}>
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Outlet context={{handleViewMovies}}/>
        </div>
    );
}

export default App;
