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
    const saleId = uuidv4();
    const saleWithId = { ...newSale, UUID: saleId, date: tempTimestamp };

    const today = new Date().toLocaleDateString();

    const existingSaleIndex = sales.findIndex(
      (sale) =>
        sale.cliente === newSale.cliente && new Date(sale.date).toLocaleDateString() === today
    );

    if (existingSaleIndex !== -1) {
      const updatedSales = [...sales];
      const existingSale = updatedSales[existingSaleIndex];
      existingSale.items = [
        ...existingSale.items,
        ...newSale.items,
      ];
      existingSale.importe += newSale.importe;

      if (navigator.onLine) {
        try {
          await addSaleToFirestore(existingSale);
        } catch (error) {
          console.error("Error updating sale:", error);
        }
      } else {
        localStorage.setItem(
          "offlineSales",
          JSON.stringify([...updatedSales])
        );
      }

      setSales(updatedSales);
    } else {
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
    }
  };

  return (
    <SalesContext.Provider value={{ sales, addSale }}>
      {children}
    </SalesContext.Provider>
  );
};
