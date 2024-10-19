import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
    const { id, name, image, rating, genre } = movie;

    return (
        <li className="card" data-testid="movie-item">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p className="rating">Rating: {rating}</p>
            <p className="genre">Genre: {genre}</p>
            <div className="details">
                <Link to={`/movies/${id}`}><h4>View Details</h4></Link>
            </div>
        </li>
    );
}

export default MovieCard;
