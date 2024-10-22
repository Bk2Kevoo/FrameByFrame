import React, { useEffect, useState } from "react"; //importing hooks
import { useParams } from "react-router-dom"; //importing routing hook
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:6001/movies"; //URL for movie API

const MovieDetails = () => {
  const [movie, setMovie] = useState(null); // State to hold the movie details.
  const { movieId } = useParams(); // Retrieves URL parameters from the current route.
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${baseUrl}/${movieId}`) // Fetching movie details using the movieId.
      .then((response) => response.json()) // Converting response to JSON.
      .then((data) => setMovie(data)) // Updating state with fetched movie data.
      .catch((error) => alert(error)); // Handling fetch errors with an alert.
  }, [movieId]); // Dependency array to refetch when movieId changes.

  if (!movie) {
    // Conditional rendering while movie data is being fetched. ! is logical not operator, if any is false condition will evaluate to true
    return <h2>Loading...</h2>; // Display loading message.
  }

  const { id, image, name, rating, genre, description } = movie; // Destructuring movie details.

  return (
    <div className="detail-card" data-testid="movie-item">
      <>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p className="rating">Rating: {rating}</p>
        <p className="genre">Genre: {genre}</p>
        <p>{description}</p>
        <div className="rent-button">
          <button onClick={() => navigate(`/movies/${id}/checkout`)}>
            Rent
          </button>
        </div>
      </>
    </div>
  );
};

export default MovieDetails;
