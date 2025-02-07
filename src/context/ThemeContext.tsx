import React, { createContext, useState, useEffect, ReactNode } from "react";

//Interface for the shape of the context

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

//Context with a default value
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

//Defines props for the ThemeProvider

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Uses `boolean` type for state and ensure correct localStorage retrieval
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("dark-mode");
    return savedMode === "true";
  });

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
