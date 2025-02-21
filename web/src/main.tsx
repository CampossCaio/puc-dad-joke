import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "@src/lib/react-toastify";
import { BrowserRouter } from "react-router";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App.tsx";

import "./global.css";
import { ErrorBoundary } from "@src/components/ErrorBoundary";
import { AuthProvider } from "./context/auth/index.tsx";
import { store } from "@src/store/config.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <ToastContainer theme="dark" autoClose={2000} />
      <BrowserRouter>
        <ReduxProvider store={store}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ReduxProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
