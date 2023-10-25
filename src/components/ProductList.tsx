// ProductList.tsx
import React from "react";
import ProductItem from "./ProductItem";
import "../styles/product-list.css";
import { ProductItemProps } from "../interfaces";

interface ProductListProps {
  products: ProductItemProps[];
}

const ProductList = React.memo(
  ({ products }: ProductListProps) => {
    return (
      <div className="product-list">
        {products ? (
          products.map((product) => (
            <ProductItem
              id={product.id}
              key={product.id}
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    );
  },
  (prevProps, nextProps) =>
    prevProps.products.length === nextProps.products.length
);

export default ProductList;
