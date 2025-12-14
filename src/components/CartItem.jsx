function CartItem({ item, onRemove, onUpdateQuantity }) {
    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="cart-item-details">
                <h4 className="cart-item-title">{item.title}</h4>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <div className="cart-item-controls">
                    <div className="quantity-controls">
                        <button
                            className="btn-quantity"
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            aria-label="Decrease quantity"
                        >
                            −
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                            className="btn-quantity"
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            aria-label="Increase quantity"
                        >
                            +
                        </button>
                    </div>
                    <button
                        className="btn-remove"
                        onClick={() => onRemove(item.id)}
                    >
                        Remove
                    </button>
                </div>
                <p className="cart-item-subtotal">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
            </div>
        </div>
    );
}

export default CartItem;
