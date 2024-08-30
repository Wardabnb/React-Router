import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL:
        "https://i.scdn.co/image/ab67616d0000b273a883e26f90ab617c91b90e56",
      rating: 4.5,
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0", // Example trailer link
    },
  ]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
    trailerLink: "",
  });
  const [showModal, setShowModal] = useState(false);

  const addMovie = (movie) => {
    const updatedMovies = [...movies, movie];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      newMovie.rating
    ) {
      addMovie({
        ...newMovie,
        rating: parseFloat(newMovie.rating),
      });
      setNewMovie({
        title: "",
        description: "",
        posterURL: "",
        rating: "",
        trailerLink: "",
      });
      setShowModal(false);
    }
  };

  const filterMovies = (title, rating) => {
    setFilteredMovies(
      movies.filter(
        (movie) =>
          (title
            ? movie.title.toLowerCase().includes(title.toLowerCase())
            : true) && (rating ? movie.rating >= rating : true)
      )
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="justify-content-around">
        <Filter onFilter={filterMovies} />
        <button
          onClick={() => setShowModal(true)}
          className="btn btn-primary rounded m-4"
        >
          New
        </button>
      </div>

      {showModal && (
        <div className="modal d-flex align-items-center justify-content-center">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add a New Movie</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="title"
                      placeholder="Title"
                      value={newMovie.title}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="description"
                      placeholder="Description"
                      value={newMovie.description}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="posterURL"
                      placeholder="Poster URL"
                      value={newMovie.posterURL}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      name="rating"
                      placeholder="Rating"
                      step="0.1"
                      value={newMovie.rating}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="trailerLink"
                      placeholder="trailerLink"
                      value={newMovie.trailerLink}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Add Movie
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="d-flex justify-content-center align-items-center">
        <MovieList movies={filteredMovies} />
      </div>
      <Routes>
        <Route path="/" element={<MovieList movies={filteredMovies} />} />
        <Route path="/movie/:title" element={<MovieDetail movies={movies} />} />
      </Routes>
    </div>
  );
};

export default App;
