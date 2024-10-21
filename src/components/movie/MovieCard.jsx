import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) { // Functional component that receives a 'movie' object as a prop.
    const { id, name, image, rating, genre } = movie; // Destructuring the movie object to extract properties.

    return (
        <li className="card" data-testid="movie-item"> 
    {/* // JSX to create a list item for the movie card. className is setting the style, data-testid is custom attribute for testing if rendering correctly*/}
            <img src={image} alt={name} className="movie-image" /> 
            <h3>{name}</h3>
            <p>Rating: {rating}</p> 
            <p className="genre">Genre: {genre}</p> 
            <div className="details"> 
            {/* // Container for additional details. */}
                <Link to={`/movies/${id}`}><h4>View Details</h4></Link> 
                {/* // Link to the movie details page using dynamic routing based on the movie's ID. */}
            </div>
        </li>
    );
}

export default MovieCard; 
