import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const useTheme = () => {
  const theme = useContext(ThemeContext);
  const isClient = typeof window !== "undefined";
  if (!isClient && !theme) return {};
  if (!theme) {
    throw new Error(
      "Must wrap the Application with ThemeProvider to use the useTheme"
    );
  }
  return theme;
};

export default useTheme;
