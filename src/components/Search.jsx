import React from "react";

function Search({ onSearch }) {
  // Functional component named Search that receives a prop 'onSearch', expected to be a function.

  const handleSearchChange = (e) => {
    // Defining a function to handle changes in the input field.
    onSearch(e.target.value); // Calls the onSearch function passed as a prop, passing the current value of the input field.
  };

  return (
    <div>
      <div className="searchbarinput"></div>
      <input
        type="text"
        placeholder="Movie Search..."
        onChange={handleSearchChange}
      ></input>
    </div>
  );
}

export default Search;
