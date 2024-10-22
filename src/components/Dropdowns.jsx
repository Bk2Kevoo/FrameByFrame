import React from "react";

function Dropdowns({
  selectedGenre,
  handleGenreChange,
  selectedRating,
  handleRatingChange,
}) {
  return (
    <div className="dropdowns">
      <div className="dropdown-group">
        <label htmlFor="genre-filter">Filter by Genre:</label>
        <select
          id="genre-filter"
          value={selectedGenre}
          onChange={(e) => handleGenreChange(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Anime">Anime</option>
          <option value="Horror/Comedy">Horror/Comedy</option>
          <option value="Family/Comedy">Family/Comedy</option>
          <option value="Horror">Horror</option>
        </select>
      </div>

      <div className="dropdown-group">
        <label htmlFor="rating-filter">Filter by Rating:</label>
        <select
          id="rating-filter"
          value={selectedRating}
          onChange={(e) => handleRatingChange(e.target.value)}
        >
          <option value="All">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );
}

export default Dropdowns;
