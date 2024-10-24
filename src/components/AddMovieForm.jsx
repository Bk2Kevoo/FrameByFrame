import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const baseUrl = "http://localhost:6001/movies";

function AddMovieForm({ }){
    // defines new function,{} is desctructuring it unpacks values from arrays or props from objects, this means youre directly extracting values from the props that is passed to the component 
    //what is in ({}) is the props, they manage the forms state and behavior

    const {handleSubmit} = useOutletContext();

    const ref = useRef(null);
    //use when something isn't needed for rendering, alternative to state *uncontrolled, managed by dom* 

    const [newMovie, setNewMovie] = useState({ name: "", rating: "", genre: "", price:"" }); // State for new movie input.

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
    };
    // setNewMovie({ name: "", image: "", rating: "", genre: "" }); // Reset the form fields

    return(
        <div>
        <form className="add-movie-form"
        onSubmit={(e) => handleSubmit(e, newMovie, ref)}>
            <h2>Add New Movie</h2>

        <input type="text" 
        name="name" 
        placeholder="Movie Name"
        value={newMovie.name}
        onChange={handleInputChange} />

        <input
        type="number"
        name="rating"
        placeholder="Rating (1-5)"
        value={newMovie.rating}
        onChange={handleInputChange}
        min="1"
        max="5" />

       <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={newMovie.genre}
        onChange={handleInputChange} /> 

        <input
        type="file"
        name="image"
        placeholder="Image URL"
        ref={ref}
        //onchange not necessary if using ref, bc we dont have a state
         />

       <input
        type="text"
        name="price"
        placeholder="Price"
        value={newMovie.price}
        onChange={handleInputChange} 
        />

        <button type="submit">Add Movie</button>
        </form>
</div>
    );
}




export default AddMovieForm; 