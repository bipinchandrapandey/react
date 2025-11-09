import React, { useState } from "react";
import Player from "./components/player";
import "./App.css";
import { FaEllipsisV } from "react-icons/fa";

const App = () => {
  const [themeIndex, setThemeIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🌈 More colorful + dark gradients
  const themes = [
    "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
    "linear-gradient(135deg, #f6d365, #fda085)",
    "linear-gradient(135deg, #84fab0, #8fd3f4)",
    "linear-gradient(135deg, #fccb90, #d57eeb)",
    "linear-gradient(135deg, #141e30, #243b55)",  // 🌙 dark blue
    "linear-gradient(135deg, #232526, #414345)",  // ⚫ metal gray
    "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // 💙 ocean dark
    "linear-gradient(135deg, #434343, #000000)",  // 🖤 pure black fade
    "linear-gradient(135deg, #1f1c2c, #928dab)",
    "linear-gradient(135deg, #421de7ff, #9c94c3ff)" // 

    
  
  ];

  const handleThemeChange = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
    setMenuOpen(false);
  };

  return (
    <div
      className="app-container"
      style={{
        background: themes[themeIndex],
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        transition: "background 0.8s ease",
      }}
    >
      {/* Three-dot menu (top-right) */}
      <div className="menu-wrapper">
        <FaEllipsisV
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {menuOpen && (
          <div className="menu-dropdown">
            <button onClick={handleThemeChange}>Change Background</button>
          </div>
        )}
      </div>

      {/* Centered Player */}
      <div className="player-center">
        <h1 className="app-header">🎶 My React Music Player</h1>
        <Player />
      </div>
    </div>
  );
};

export default App;
