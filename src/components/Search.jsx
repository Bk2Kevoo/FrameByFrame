import React from "react";

function Search({ onSearch }) { // Functional component named Search that receives a prop 'onSearch', expected to be a function.
  
  const handleSearchChange = (e) => { // Defining a function to handle changes in the input field.
    onSearch(e.target.value); // Calls the onSearch function passed as a prop, passing the current value of the input field.
  };

  return (
    <div className="searchbar"> 
    {/* // A container for the search input field, applying a CSS class for styling. */}
      <input
        type="text" // Specifies that this input field is for text input.
        placeholder="Movie Search..." 
        onChange={handleSearchChange} // Attaching the handleSearchChange function to the onChange event of the input field.
      />
    </div>
  );
}

export default Search; 
