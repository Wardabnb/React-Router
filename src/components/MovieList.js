// MovieList.js
import React from "react";
import MovieCard from "./MovieCard.js";
import "bootstrap/dist/css/bootstrap.min.css";
const MovieList = ({ movies }) => {
  return (
    <div className="d-flex">
      {movies.map((movie, index) => (
        <MovieCard
          key={index} // Assignation d'une clÃ© unique
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
          TrailerLink={movie.TrailerLink}
        />
      ))}
    </div>
  );
};

export default MovieList;
