import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DrinksProvider } from "./context/DrinksContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DrinksProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DrinksProvider>
  </StrictMode>
);
