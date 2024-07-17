import React, { createContext, useState, useEffect } from "react";
import {
  getSalesFromFirestore,
  addSaleToFirestore,
  deleteSaleFromFirestore,
  completeSale,
  getTodayCaja,
} from "../services/firebaseService";
import { v4 as uuidv4 } from "uuid";

export const SalesContext = createContext();

export const SalesProvider = ({ children }) => {
  const [sales, setSales] = useState([]);
  const [caja, setCaja] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSales = async () => {
      setLoading(true);
      setError(null);
      try {
        const salesData = await getSalesFromFirestore();
        const localSales =
          JSON.parse(localStorage.getItem("offlineSales")) || [];
        setSales([...salesData, ...localSales]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSales();
  }, []);

  useEffect(() => {
    const fetchCaja = async () => {
      setLoading(true);
      setError(null);
      try {
        const cajaData = await getTodayCaja();
        setCaja(cajaData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCaja();
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
        setSales((prevSales) => {
          const updatedSales = [...prevSales, saleWithId];
          console.log("Updated Sales:", updatedSales); // Debug line
          return updatedSales;
        });
        const saleFromServer = await addSaleToFirestore(saleWithId);
      } catch (error) {
        console.error("Error adding sale:", error);
        setError(error);
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
  const deleteSale = async (saleId) => {
    try {
      setSales((prevSales) => prevSales.filter((sale) => sale.id !== saleId));
      await deleteSaleFromFirestore(saleId);
    } catch (error) {
      console.error("Error deleting sale:", error);
      setError(error);
    }
  };
  const markAsCompleted = async (saleId) => {
    try {
      // Update state optimistically
      setSales((prevSales) =>
        prevSales.map((sale) =>
          sale.id === saleId ? { ...sale, status: "Pagado" } : sale
        )
      );
      // Make the server request
      const updatedSale = await completeSale(saleId);
      // Update the sale with the actual server response
      setSales((prevSales) =>
        prevSales.map((sale) => (sale.id === saleId ? updatedSale : sale))
      );
    } catch (error) {
      console.error("Error marking sale as complete:", error);
      setError(error);
    }
  };

  return (
    <SalesContext.Provider
      value={{
        sales,
        caja,
        addSale,
        deleteSale,
        markAsCompleted,
        loading,
        error,
      }}
    >
      {children}
    </SalesContext.Provider>
  );
};
