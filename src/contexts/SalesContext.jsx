// src/contexts/SalesContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getSalesFromFirestore, addSaleToFirestore } from '../services/firebaseService'; // Tu servicio para obtener y añadir ventas

export const SalesContext = createContext();

export const SalesProvider = ({ children }) => {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        const fetchSales = async () => {
            const salesData = await getSalesFromFirestore();
            setSales(salesData);
        };
        fetchSales();
    }, []);

    const addSale = async (newSale) => {
        const saleId = await addSaleToFirestore(newSale);
        setSales(prevSales => [...prevSales, { id: saleId, ...newSale }]);
    };

    return (
        <SalesContext.Provider value={{ sales, addSale }}>
            {children}
        </SalesContext.Provider>
    );
};
