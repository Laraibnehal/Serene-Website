// Internal Imports
import React from "react";
import ReactDOM from "react-dom/client";

// External Imports
import { BrowserRouter } from "react-router-dom";

// Styles
import "./index.css";

// Components
import App from "./App";
import {AppProvider} from "./context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>
  
  </React.StrictMode>
);
