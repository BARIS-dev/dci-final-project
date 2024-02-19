import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/user.context.jsx";
import { CartContextProvider } from "./context/cart.context.jsx";
import { FavoritesContextProvider } from "./context/favorites.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <FavoritesContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartContextProvider>
      </FavoritesContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
