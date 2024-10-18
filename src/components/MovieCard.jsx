import React from "react";

function MovieCard({ movie }) {

    const { name, image, rating, genre } = movie


    return (
        <li className="card" data-testid="movie-item">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p className="rating">Rating: {rating}</p>
            <p className="genre">Genre: {genre}</p>
            <div className="buttons">
                <button className="details-button">View Details</button>
                <button className="rent-button"> Rent </button>
            </div>
        </li>
    )
}

export default MovieCard;