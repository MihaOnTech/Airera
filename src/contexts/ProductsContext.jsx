import React, { createContext, useState, useEffect } from 'react';
import { getAllProducts } from '../services/firebaseService';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await getAllProducts();
            setProducts(productsData);
        };
        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};
