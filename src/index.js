import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./context";
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
  
);