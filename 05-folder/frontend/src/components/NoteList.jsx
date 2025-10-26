import React from "react";
import NoteItem from "./NoteItem";
import "./NoteList.css";

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p className="empty">No notes yet. Start adding some!</p>
      ) : (
        notes.map((note) => (
          <NoteItem key={note.id} note={note} deleteNote={deleteNote} />
        ))
      )}
    </div>
  );
};

export default NoteList;
