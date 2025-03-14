import React from "react";
import { useTheme } from "./ThemeProvider";

// const getStoredTheme = () => {
//   console.log("Fetching theme from localStorage...");
//   console.log("render");
//   return localStorage.getItem("theme") || "light";
// };

const ThemeSwitcher = () => {
  // const [theme, setTheme] = useState(() => getStoredTheme());
  const {theme,setTheme}=useTheme();
  console.log(theme);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
