import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Provider } from "jotai";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* use jotai provider to handle global states */}
    <Theme>
      <Provider>
        <App />
      </Provider>
    </Theme>
  </React.StrictMode>
);
