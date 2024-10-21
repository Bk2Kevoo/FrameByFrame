import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 

const baseUrl = "http://localhost:6001/movies";

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams(); 

    useEffect(() => {
        fetch(`${baseUrl}/${movieId}`) 
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(err => alert(err)); 
    }, [movieId]);

    if (!movie) {
        return <h2>Loading...</h2>;
    }

    const { image, name, rating, genre, description } = movie;

    return (
        <li className="detail-card" data-testid="movie-item">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p className="rating">Rating: {rating}</p>
            <p className="genre">Genre: {genre}</p>
            <p>{description}</p>
            <div className="buttons">
                <button>Rent</button>
            </div>
        </li>
    );
}

export default MovieDetails;