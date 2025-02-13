import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "@src/lib/react-toastify";
import App from "./App.tsx";

import "./global.css";
import { ErrorBoundary } from "@src/components/ErrorBoundary";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <ToastContainer theme="dark" autoClose={2000} />
      <App />
    </ErrorBoundary>
  </StrictMode>
);
