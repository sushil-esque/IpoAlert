import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";

interface Theme {
  darkMode: boolean;
  toggleTheme(): void;
}
 const ThemeContext = createContext<Theme | null>(null);
export const useThemeContext = ()=>{
    const themeContext = useContext(ThemeContext)
    if(!themeContext){
        throw new Error("useTHemeContext has to be used within <ThemeContext.provider>")
    }
    return themeContext
}

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";

    }
    return window.matchMedia("(prefers-color-scheme:dark)").matches;
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  const toggleTheme = () => setDarkMode((prev) => !prev);
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
