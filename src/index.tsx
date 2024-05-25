import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "@app/tools/assets/fonts/styles/index.scss"
import "./index.scss";
import "./output.css"

import App from "@app/App";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
