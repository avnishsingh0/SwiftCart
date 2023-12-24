import React from "react";

// internal imports
import App from "./App";
import Store from "./Redux/store";
import reportWebVitals from "./reportWebVitals";

// third party
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
reportWebVitals();
