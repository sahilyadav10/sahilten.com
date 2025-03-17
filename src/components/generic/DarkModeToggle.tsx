import { useTheme } from "@/context/ThemeContext";

const DarkModeToggle = ({ className = "w-10 h-10" }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className={`relative flex items-center justify-center transition-colors bg-transparent ${className}`}
    >
      <div className="relative w-full h-full">
        <div
          className={`absolute inset-0 transition-all duration-700 transform ${
            isDarkMode
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        >
          {/* Crescent Moon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-neutral-100 w-full h-full transition-all duration-700"
          >
            <path d="M14 2a10 10 0 1 0 8 16 7 7 0 1 1-8-16z" />
          </svg>
        </div>
        <div
          className={`absolute inset-0 transition-all duration-700 transform ${
            isDarkMode
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        >
          {/* Sun */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-yellow-500 w-full h-full transition-all duration-700"
          >
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 1v3m0 16v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3m16 0h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default DarkModeToggle;
