import React from "react";
import ReactDOM from "react-dom/client";
import { DarkModeProvider } from "./context/DarkModeContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
