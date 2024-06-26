import React from "react";
import ReactDOM from "react-dom/client";
import "bootswatch/dist/lux/bootstrap.min.css";

import App from "./App";
import { ShoppingCartProvider } from "./utils/ShoppingCartUtils";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </React.StrictMode>
);
