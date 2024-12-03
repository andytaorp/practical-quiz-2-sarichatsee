import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    // TODO: Write code to handle form submission
    e.preventDefault();
    if (title.trim() === "") return; // Ensure the title is not empty
    onAddMovie(title); // Pass the title to the parent handler
    setTitle(""); // Clear the input field after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}
