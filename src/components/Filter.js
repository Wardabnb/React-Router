import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onFilter(e.target.value, rating);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    onFilter(title, e.target.value);
  };

  return (
    <div className="m-3 flex gap-3">
      <label className="fw-bold">Enter Title:</label>
      <br></br>
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitleChange}
        className="p-2"
      />
      <br></br>
      <label className="fw-bold">Enter rating:</label>
      <br></br>
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={handleRatingChange}
        className="p-2 "
      />
    </div>
  );
};

export default Filter;
