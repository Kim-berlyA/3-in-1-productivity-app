import { useEffect, useState } from "react";
import Light from "../assets/light.png";
import Dark from "../assets/dark.png";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <button
        onClick={handleTheme}
        className="w-11 h-7 bg-neutral-300 dark:bg-neutral-800 rounded-full relative cursor-pointer transition-colors duration-300 hidden md:block"
      >
        <div className="size-5 rounded-full shadow absolute top-1 left-1 transition-all duration-300 bg-white dark:bg-black dark:translate-x-4 flex justify-center items-center">
          <img src={theme === "dark" ? Light : Dark} alt="icon" className="size-5" />
        </div>
      </button>

      <button
        onClick={handleTheme}
        className="size-7 bg-neutral-300 dark:bg-neutral-800 rounded-full relative cursor-pointer transition-colors duration-300 flex justify-center items-center md:hidden"
      >
        <img src={theme === "dark" ? Light : Dark} alt="icon" className="size-6" />
      </button>
    </>
  );
}
