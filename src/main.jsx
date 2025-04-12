import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  /*  strict mode only runs in development mode. 
      It does not render twice in production.
      It helps catch bugs early before they cause serious problems.
  */
  <StrictMode>
    <App />
  </StrictMode>
);
