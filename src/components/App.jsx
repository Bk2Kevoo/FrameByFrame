import React, { useState } from "react";
import Header from "./navigation/Header";
import MoviePage from "./movie/MoviePage";
import { Outlet } from "react-router-dom";

function App() {

    const [isDarkMode, setIsDarkMode] = useState(true)

    const toggleDarkMode = () => setIsDarkMode(current => !current)

    return (
        <div className={isDarkMode ? "App" : "App light"}>
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Outlet />
        </div>
    );
}

export default App;