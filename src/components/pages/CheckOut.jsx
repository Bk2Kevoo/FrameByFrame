import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { object, string, number } from "yup";

const projectSchema = object({
  name: string("Name must be a string").required("Name is required"),
  rating: number("Rating must be a number")
    .positive("Rating must be a positive number")
    .integer("Rating must be a whole number")
    .required("Rating is required"),
  genre: string("Genre must be a string").required("Genre is required"),
});

const baseUrl = "http://localhost:6001/movies";

const CheckOut = () => {
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    genre: "",
  });

  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    fetch(`${baseUrl}/${movieId}`)
      .then((response) => response.json())
      .then(setFormData);
  }, [movieId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const namedMovie = {
      name: formData.name,
      rating: Number(formData.rating),
      genre: formData.genre,
    };

    projectSchema
      .validate(namedMovie)
      .then((namedMovie) => {
        fetch(`${baseUrl}/${movieId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(namedMovie), 
        })
          .then((response) => response.json())
          .then((namedMovie) => {
            handleCheckOut(namedMovie);
            navigate(`/movies/${movieId}/checkout`);
          })
          .catch((err) => alert(err));
      })
      .catch((err) => alert(err.message));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section>
      <form
        className="Checkout-form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="basic-information">
          <h3>Movie Information</h3>
        </div>

        <label htmlFor="name"> Movie Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="rating">Movie Rating</label>
        <select
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        >
          <option>Select One</option>
          <option value="1">1⭐ </option>
          <option value="2">2⭐</option>
          <option value="3">3⭐</option>
          <option value="4">4⭐</option>
          <option value="5">5⭐</option>
        </select>

        <label htmlFor="genre">Movie Genre</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />
      </form>

      <section>
        <div>
          <form
            className="basic-form"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="basic-information">
              <h3>Basic Information</h3>
            </div>

            <label htmlFor="name"> First Name</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="genre">Last Name</label>
            <input type="text" id="genre" name="genre" />
            <label htmlFor="genre">Card Number</label>
            <input type="text" id="genre" name="genre" />

            <button>CheckOut</button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default CheckOut;