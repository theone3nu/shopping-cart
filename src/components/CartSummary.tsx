import React from "react";
import { useCartActions, useCartSelector } from "./CartContext";
import { CartItem } from "../interfaces";

import "../styles/cart-summary.css";

const CartSummary = () => {
  const { cart } = useCartSelector();
  const { removeFromCart, addToCart } = useCartActions();

  const decreaseQuantity = (cartItem: CartItem) => {
    removeFromCart(cartItem.id);
  };
  return (
    <div className="cart-container">
      <h3 className="card-title"> Your Cart </h3>
      <div className="flex items-center justify-between">
        <div className="cartItem">
          <p className="cartItem-title">Item</p>
          <div className="flex flex-col gap-2">
            {cart.map((item: CartItem) => (
              <p key={item.title}>{item.title}</p>
            ))}
          </div>
        </div>
        <div className="cartQuantity">
          <p className="cartItem-title">Quantity</p>
          <div className="flex flex-col gap-2">
            {cart.map((item: CartItem) => (
              <div
                className="flex items-center justify-between gap-2"
                key={item.title}
              >
                <span className="qty" onClick={() => decreaseQuantity(item)}>
                  -
                </span>
                <span className="qty-value">{item.quantity}</span>
                <span
                  className="qty"
                  onClick={() => addToCart(item.id, item.title)}
                >
                  +
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
