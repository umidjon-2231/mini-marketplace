import React from "react";
import ReactDOM from "react-dom/client";
import Cart from "./components/Cart.jsx";
import "./style.css";

ReactDOM.createRoot(document.getElementById("cart-root")).render(
    <React.StrictMode>
        <Cart />
    </React.StrictMode>
);
