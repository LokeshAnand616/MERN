"use client";

import { createContext, useContext } from "react";

export const ThemeContext = createContext("dark");

export default function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value="dark">
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
