import { useContext, useEffect } from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import { DarkModeContext } from "./context/DarkModeContext";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  useEffect(() => {
    const changeBody = () => {
      document.body.style.backgroundColor = darkMode ? "#2c3333" : "white";
    };
    changeBody();
    return () => {};
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <NavBar />
      <HomePage />
    </div>
  );
}
export default App;
