// DataFetcher.tsx
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";
import { fetchProducts } from "../api/productsApi";
import { bubbleSortByTitleAscending } from "../utils/bubbleSort";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const DataFetcher = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchProducts();
        const products = bubbleSortByTitleAscending(response?.products);
        // products.sort((a: any, b: any) => a.title.localeCompare(b.title));
        setProducts(products);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ProductList products={products} />
          <CartSummary />
        </>
      )}
    </>
  );
};

export default DataFetcher;
