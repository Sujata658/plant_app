import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PlantProvider } from "./components/PlantContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PlantProvider>
      <App />
    </PlantProvider>
  </React.StrictMode>
);
