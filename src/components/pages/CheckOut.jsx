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

  const handleCheckoutFeature = () => {
    alert("Thank you for the purchase, this movie expires in 3 days");
  };

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
            handleCheckoutFeature(namedMovie);
            navigate(`/movies/${movieId}/checkout`);
          })
          .catch((err) => alert(err));
      })
      .catch((err) => alert(err.message));
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

        <label htmlFor="name"> Movie Name: </label>
        <input type="text" id="name" name="name" value={formData.name} />

        <label htmlFor="movie-rating">Movie Rating: </label>
        <input
          className="small-input"
          id="movie-rating"
          type="text"
          value={`${formData.rating} ★`}
          readOnly
        />

        <label htmlFor="genre">Movie Genre: </label>
        <input type="text" id="genre" name="genre" value={formData.genre} />
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

            <label htmlFor="first-name"> First Name</label>
            <input type="text" id="first-name" name="first-name" required />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" />

            <label htmlFor="card-number">Card Number</label>
            <input type="text" id="card-number" name="card-number" />

            <button onClick={handleCheckoutFeature}>CheckOut</button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default CheckOut;
