import React, { createContext, useState, useEffect } from "react";
import {
  getSalesFromFirestore,
  addSaleToFirestore,
  completeSale
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
        const salesData = await getSalesFromFirestore();
        const existingSaleIds = new Set(salesData.map((sale) => sale.id));

        const salesToSync = localSales.filter(
          (sale) => !existingSaleIds.has(sale.id)
        );

        for (let sale of salesToSync) {
          await addSaleToFirestore(sale);
        }

        localStorage.removeItem("offlineSales");
        setSales([...salesData, ...salesToSync]);
      }
    };

    window.addEventListener("online", syncOfflineSales);

    return () => {
      window.removeEventListener("online", syncOfflineSales);
    };
  }, []);

  const addSale = async (newSale) => {
    const tempTimestamp = new Date().toISOString();
    const saleWithId = { ...newSale, UUID: uuidv4(), date: tempTimestamp };

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

  const markAsCompleted = async (saleId) => {
    try {
      const updatedSale = await completeSale(saleId);
      setSales((prevSales) =>
        prevSales.map((sale) => (sale.UUID === saleId ? updatedSale : sale))
      );
    } catch (error) {
      console.error('Error marking sale as complete:', error);
    }
  };

  return (
    <SalesContext.Provider value={{ sales, addSale, markAsCompleted }}>
      {children}
    </SalesContext.Provider>
  );
};
