import * as React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";

import App from "./app";

import "./index.css";

const rootEl = document.getElementById("root");

// Render react app
ReactDOM.createRoot(rootEl!).render(
  <React.StrictMode>
    <Toaster
      theme="light"
      richColors
      closeButton
      toastOptions={{
        style: {
          background: "#ffffff",
          color: "#1f2937",
          border: "1px solid #e7dece",
          opacity: 0.98,
        },
      }}
    />
    <App />
  </React.StrictMode>,
);
