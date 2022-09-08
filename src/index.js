import React from "react";
import ReactDOM from "react-dom/client";

// Pages
import App from "./App";

// styles ⭐
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
