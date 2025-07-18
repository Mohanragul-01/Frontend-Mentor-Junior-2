import { useState, useEffect } from "react";
import Extensions from "./components/Extensions";
import Themes from "./components/Themes";
import Logo from "./components/Logo";
import "./App.css";

function App() {
  const [selected, setSelected] = useState("All");

  const storedTheme = localStorage.getItem("theme") || "light";

  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", theme === "dark");
    localStorage.setItem("Theme", theme);
  }, [theme]);

  return (
    <>
      <div className={`header ${theme}`}>
        <Logo theme={theme} />
        <Themes theme={theme} setTheme={setTheme} />
      </div>

      <div className="content">
        <h1 className={`title ${theme}-mode-title`}>Extensions List</h1>
        <div className="filter-buttons">
          {["All", "Active", "Inactive"].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${theme}-mode-btn ${
                selected === filter ? "active" : ""
              }`}
              onClick={() => setSelected(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="manager-container">
        <Extensions theme={theme} selected={selected}/>
      </div>
    </>
  );
}

export default App;
