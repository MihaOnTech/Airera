import React, { createContext, useState, useEffect } from "react";
import { getAllProducts, addProduct } from "../services/firebaseService";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const productsData = await getAllProducts();
        setProducts(productsData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const addNewProduct = async (product) => {
    try {
      const newProduct = await addProduct(product);
      setProducts((prevProducts) => [...prevProducts, newProduct]);
      console.log(newProduct);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <ProductsContext.Provider value={{ products, loading, error, addNewProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
