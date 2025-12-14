import { useState, useEffect } from "react";
import CartList from "./CartList";

function initCart() {
    try {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
        console.error("Failed to load cart from localStorage:", error);
        return [];
    }
}

function Cart() {
    const [cartItems, setCartItems] = useState(initCart);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const handleAddToCart = (event) => {
            const product = event.detail;
            addProduct(product);
        };

        window.addEventListener("addToCart", handleAddToCart);
        return () => {
            window.removeEventListener("addToCart", handleAddToCart);
        };
    }, [cartItems]);

    const addProduct = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeProduct = (productId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== productId)
        );
    };

    const updateQuantity = (productId, change) => {
        setCartItems((prevItems) => {
            return prevItems
                .map((item) => {
                    if (item.id === productId) {
                        const newQuantity = item.quantity + change;
                        return newQuantity > 0
                            ? { ...item, quantity: newQuantity }
                            : item;
                    }
                    return item;
                })
                .filter((item) => item.quantity > 0);
        });
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const totalAmount = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="cart">
            {cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Your cart is empty</p>
                    <p className="cart-hint">Add products from the catalog</p>
                </div>
            ) : (
                <>
                    <CartList
                        items={cartItems}
                        onRemove={removeProduct}
                        onUpdateQuantity={updateQuantity}
                    />
                    <div className="cart-summary">
                        <div className="cart-summary-row">
                            <span>Total Items:</span>
                            <span className="cart-summary-value">
                                {totalItems}
                            </span>
                        </div>
                        <div className="cart-summary-row cart-total">
                            <span>Total Amount:</span>
                            <span className="cart-summary-value">
                                ${totalAmount.toFixed(2)}
                            </span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
