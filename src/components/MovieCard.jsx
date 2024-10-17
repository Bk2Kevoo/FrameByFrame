import React from "react";

function MovieCard({ movie }) {

    const { name, image, rating, genre } = movie


    return (
        <li className="grid" data-testid="movie-item">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{rating}</p>
            <p>{genre}</p>
        </li>
    )
}

export default MovieCard;