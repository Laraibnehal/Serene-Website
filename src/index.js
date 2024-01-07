// Internal Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';
// External Imports
import { BrowserRouter } from "react-router-dom";

// Styles
import "./index.css";

// Components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-ft7yl7j0tj2ce0c0.us.auth0.com"
    clientId="RZ8oyzeBI4OH8EHg8K9NLOChLpY6ht1K"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
</Auth0Provider>
);
