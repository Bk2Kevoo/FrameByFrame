import React from "react";
import { Link } from "react-router-dom";
import VideoLikes from "../VideoLikes";

function MovieCard({ movie }) {
  // Functional component that receives a 'movie' object as a prop.
  const { id, name, image, rating, genre, upvotes, downvotes } = movie; // Destructuring the movie object to extract properties.

  return (
    <li className="card" data-testid="movie-item">
      {/* // JSX to create a list item for the movie card. className is setting the style, data-testid is custom attribute for testing if rendering correctly */}
      <img src={image} alt={name} className="movie-image" />
      <h3>{name}</h3>
      <p>Rating: {rating}</p>
      <p className="genre">Genre: {genre}</p>

      {/* video likes component */}
      <VideoLikes movieId={id} upvotes={upvotes || 0} downvotes= {downvotes || 0} />

      <div className="details">
        <Link to={`/movies/${id}`}>
          <button>View Details</button>
        </Link>
        {/* // Link to the movie details page using dynamic routing based on the movie's ID. */}
      </div>
    </li>
  );
}

export default MovieCard;
