import React, { useContext } from "react";
import { FaGithub, FaSearch, FaCog, FaMoon, FaSun } from "react-icons/fa";
import { DarkModeContext } from "../context/DarkModeContext.js";
export default function NavBar() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  // const onClickButton = () => {
  //   setDarkMode(!darkMode);
  // };
  //const [theme, setTheme] = useState(false);
  return (
    <div>
      <header>
        <section className="wrapper">
          <span>
            <FaGithub className="nav-item" />
            <FaSearch className="nav-item" />
            <button
              className="theme-button"
              type="button"
              onClick={() => toggleDarkMode()}
            >
              {darkMode ? (
                <FaSun className="nav-item" />
              ) : (
                <FaMoon className="nav-item" />
              )}
            </button>
            <FaCog className="nav-item" />
          </span>
        </section>
      </header>
    </div>
  );
}
