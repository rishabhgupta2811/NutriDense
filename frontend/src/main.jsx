import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import CartProvider from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import WishlistProvider from "./context/WishlistContext";
import { AddressProvider } from "./context/AddressContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <WishlistProvider>
        <AddressProvider>

          <>
            <App />

            <Toaster
              position="top-right"
              toastOptions={{
                duration: 2500,
                style: {
                  borderRadius: "12px",
                  background: "#166534",
                  color: "#fff",
                },
              }}
            />
          </>
        </AddressProvider>
      </WishlistProvider>
    </CartProvider>
  </BrowserRouter>
);