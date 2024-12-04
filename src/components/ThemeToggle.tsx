import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react"; // Make sure to import your icons

export function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    localStorage.setItem("@dark-mode-react-tailwind:theme-1.0.0", newTheme);
    setTheme(newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem(
      "@dark-mode-react-tailwind:theme-1.0.0"
    );

    if (themeFromLocalStorage) {
      setTheme(themeFromLocalStorage);
      document.documentElement.classList.toggle(
        "dark",
        themeFromLocalStorage === "dark"
      );
    }
  }, []);

  return (
    <button
      className="flex items-center justify-center rounded h-[2rem] w-[2rem]"
      onClick={toggleTheme}
    >
      {theme === "light" && (
        <Sun className="h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      )}
      {theme === "dark" && (
        <Moon className="h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
    </button>
  );
}
