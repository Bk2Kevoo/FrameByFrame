import React from "react";

function Search({ onSearch }) {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Movie Search..."
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;