import React, { useEffect, useState } from "react";
import Header from "./navigation/Header";

import { Outlet, useNavigate } from "react-router-dom";


function App() {
  // const [isDarkMode, setIsDarkMode] = useState(true);

    const [movies, setMovies] = useState([]); // State to hold the list of movies

    const navigate = useNavigate();
    // const toggleDarkMode = () => setIsDarkMode(current => !current); // Function to toggle the dark mode state. It uses the current state to flip it.

    const handleViewMovies = (updatedMovie) => { // Function to update the list of movies when a movie's details are modified.
        const updatedArray = movies.map(movie => // Creating a new array by mapping over the existing movies array.
            movie.id === updatedMovie.id ? updatedMovie : movie // If the movie id matches the updatedMovie's id, replace it; otherwise, keep the original.
        );
        setMovies(updatedArray); // Updating the movies state with the new array of movies.
        };


         //function to handle adding a movie
    const handleAddMovie = (e, newMovie) => {
        e.preventDefault();   //logic to send movie to state
      

        
        setMovies((prevMovies) => 
        [...prevMovies, { ...newMovie }]); // Add new movie with a unique id
    };

    useEffect(() => { // useEffect to fetch movies when the component mounts.
        fetch("http://localhost:6001/movies") 
            .then((response) => response.json()) 
            .then((data) => setMovies(data)) // Updating the movies state with the fetched data.
            .catch((error) => console.log("Error", error)); // Logging any errors during the fetch.
    }, []); 
    
    const handleSubmit = (event, newMovie, ref) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const image = URL.createObjectURL(ref.current.files[0])
        fetch("http://localhost:6001/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...newMovie, image:image, price:parseInt(newMovie.price), rating:parseInt(newMovie.rating)  }), // Send the new movie data
        })
        .then((response) => response.json())
        .then((data) => {
            setMovies((prevMovies) => [...prevMovies, data]);
            navigate("/movies") 
            // Update the movies state with the new movie
        })
        .catch((error) => console.log("Error", error));
    };
    
    return (
        <div > 
            <Header />
            <Outlet context={{ handleViewMovies, handleAddMovie, movies, handleSubmit }}/> 
                    
        </div>
  );
}

export default App;