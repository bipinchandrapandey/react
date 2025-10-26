import React, { useState } from "react";
import "./NoteInput.css";

const NoteInput = ({ addNote }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(input);
    setInput("");
  };

  return (
    <form className="note-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write your note..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NoteInput;
