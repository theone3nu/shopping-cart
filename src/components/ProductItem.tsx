// ProductItem.tsx
import React from "react";
import { useCartActions } from "./CartContext";
import "../styles/product-item.css";
import { ProductItemProps } from "../interfaces";

const ProductItem = React.memo(
  ({ title, price, thumbnail, id }: ProductItemProps) => {
    const { addToCart } = useCartActions();

    const handleAddToCart = () => {
      addToCart(id, title);
    };


    return (
      <div className="product-item">
        <img
          src={thumbnail}
          alt="product thumbnail"
          className="product-image"
        />

        <h3 className="product-name">{title}</h3>

        <p className="product-price">${price}</p>
        <button onClick={handleAddToCart} className="product-cart-cta">
          Add to Cart
        </button>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.title === nextProps.title &&
      nextProps.thumbnail === prevProps.thumbnail &&
      prevProps.price === nextProps.price
    );
  }
);

export default ProductItem;
