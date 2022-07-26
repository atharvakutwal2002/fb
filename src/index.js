import { ThemeProvider } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom/client";
import {theme} from "./theme"

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
