import React, { createContext, useState, useEffect } from "react";
import {
  getSalesFromFirestore,
  addSaleToFirestore,
} from "../services/firebaseService";

import { v4 as uuidv4 } from "uuid";

export const SalesContext = createContext();

export const SalesProvider = ({ children }) => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      const salesData = await getSalesFromFirestore();
      const localSales = JSON.parse(localStorage.getItem("offlineSales")) || [];
      setSales([...salesData, ...localSales]);
    };
    fetchSales();
  }, []);

  useEffect(() => {
    const syncOfflineSales = async () => {
      const localSales = JSON.parse(localStorage.getItem("offlineSales")) || [];
      if (localSales.length > 0) {
        const salesData = await getSalesFromFirestore(); // Obtén las ventas actuales del servidor
        const existingSaleIds = new Set(salesData.map((sale) => sale.id)); // Crea un conjunto de IDs de ventas existentes

        const salesToSync = localSales.filter(
          (sale) => !existingSaleIds.has(sale.id)
        ); // Filtra las ventas que no están ya en el servidor

        for (let sale of salesToSync) {
          await addSaleToFirestore(sale);
        }

        localStorage.removeItem("offlineSales");
        setSales([...salesData, ...salesToSync]); // Actualiza el estado con las ventas sincronizadas y las del servidor
      }
    };

    window.addEventListener("online", syncOfflineSales);

    return () => {
      window.removeEventListener("online", syncOfflineSales);
    };
  }, []);

  const addSale = async (newSale) => {
    const tempTimestamp = new Date().toISOString();
    const saleId = uuidv4();
    const saleWithId = { ...newSale, UUID: saleId, date: tempTimestamp };

    if (navigator.onLine) {
      try {
        const saleFromServer = await addSaleToFirestore(saleWithId);
        setSales((prevSales) => [...prevSales, saleFromServer]);
      } catch (error) {
        console.error("Error adding sale:", error);
      }
    } else {
      const offlineSales =
        JSON.parse(localStorage.getItem("offlineSales")) || [];
      localStorage.setItem(
        "offlineSales",
        JSON.stringify([...offlineSales, saleWithId])
      );
      setSales((prevSales) => [...prevSales, saleWithId]);
    }
  };

  return (
    <SalesContext.Provider value={{ sales, addSale }}>
      {children}
    </SalesContext.Provider>
  );
};
