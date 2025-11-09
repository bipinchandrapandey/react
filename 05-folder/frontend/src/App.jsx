import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import "./App.css";
import { FaEllipsisV } from "react-icons/fa"; // ✅ three-dot icon

const App = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [soundOn, setSoundOn] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Audio
  const addSound = new Audio("/beep2.mp3");
  const deleteSound = new Audio("/beep.mp3");

  // Fetch notes
  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/notes");
      setNotes(res.data);
    } catch {
      setError("Failed to load notes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Add note
  const addNote = async (noteText) => {
    if (!noteText.trim()) return;
    try {
      const timestamp = new Date().toLocaleString();
      const res = await axios.post("http://localhost:5000/api/notes", {
        text: noteText,
        timestamp,
      });
      setNotes([res.data, ...notes]);
      if (soundOn) addSound.play().catch(console.error);
    } catch {
      setError("Failed to add note.");
    }
  };

  // Delete note
  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/notes/${id}`);
      setNotes(notes.filter((note) => note._id !== id));
      if (soundOn) deleteSound.play().catch(console.error);
    } catch {
      setError("Failed to delete note.");
    }
  };

  // Dark mode
  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <div className="app-container">
      {/* Three-dot menu using icon */}
      <div className="menu-container" ref={menuRef}>
        <FaEllipsisV
          className="menu-dots-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {menuOpen && (
          <div className="menu-dropdown">
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "🌞 Day Mode" : "🌙 Night Mode"}
            </button>
            <button onClick={() => setSoundOn(!soundOn)}>
              {soundOn ? "🔊 Sound On" : "🔇 Muted"}
            </button>
          </div>
        )}
      </div>

      <h1>📝 Notes App (MERN)</h1>

      <NoteInput addNote={addNote} />

      {error && <p className="error">{error}</p>}

      {loading ? (
        <p>Loading notes...</p>
      ) : (
        <NoteList notes={notes} deleteNote={deleteNote} />
      )}
    </div>
  );
};

export default App;
