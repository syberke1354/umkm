import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import { App } from "./App";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
