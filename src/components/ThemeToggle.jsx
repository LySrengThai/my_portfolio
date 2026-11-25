import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const ThemeToggle = () => {
  // The inline script in index.html has already applied the correct class.
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    const next = !isDarkMode;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // storage unavailable; theme just won't persist
    }
    setIsDarkMode(next);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
      className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
    >
      {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
