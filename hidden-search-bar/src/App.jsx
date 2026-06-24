import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [showInput, setShowInput] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const inputRef = useRef(null);

  const handleSearch = () => {
    setShowInput(!showInput);

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <div className="top-bar">
        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      <div className="search-container">
        <button className="search-btn" onClick={handleSearch}>
          🔍
        </button>

        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          className={showInput ? "search-input active" : "search-input"}
        />
      </div>
    </div>
  );
}

export default App;