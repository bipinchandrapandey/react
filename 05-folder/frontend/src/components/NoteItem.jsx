import React from "react";
import "./NoteItem.css";

const NoteItem = ({ note, deleteNote }) => {
  const date = new Date(note.createdAt).toLocaleString(); // format date

  return (
    <div className="note-item">
      <p>{note.text}</p>
      <small className="timestamp">{date}</small>
      <button onClick={() => deleteNote(note._id)} aria-label="Delete note">🗑️</button>
    </div>
  );
};

export default NoteItem;
