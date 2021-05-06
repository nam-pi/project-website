import { TranslationProvider } from "I18n/TranslationContext";
import { NampiProvider } from "nampi-use-api";
import React from "react";
import ReactDOM from "react-dom";
import "tailwindcss/tailwind.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

const api = process.env.REACT_APP_API;

if (!api) {
  throw new Error("Invalid environment");
}

ReactDOM.render(
  <React.StrictMode>
    <TranslationProvider>
      <NampiProvider api={api} searchTimeout={200}>
        <App />
      </NampiProvider>
    </TranslationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
