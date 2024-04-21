import React from "react";
import ReactDOM from "react-dom/client";
import "./app/tools/services/localization/index.ts";
import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
