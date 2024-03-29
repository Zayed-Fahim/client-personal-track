import { useEffect, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    let storedTheme = localStorage.getItem("theme");
    if (!storedTheme || !(storedTheme === "dark" || storedTheme === "light")) {
      storedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").setAttribute("data-mode", theme);
  }, [theme]);

  useEffect(() => {
    const onChange = (event) => {
      const colorScheme = event.matches ? "dark" : "light";
      setTheme(colorScheme);
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", onChange);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", onChange);
    };
  }, []);

  const toggleTheme = (theme) => {
    setTheme(() => {
      const currentTheme = theme;
      localStorage.setItem("theme", currentTheme);
      return currentTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
