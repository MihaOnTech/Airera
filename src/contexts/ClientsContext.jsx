// src/contexts/ClientsContext.js
import React, { createContext, useState, useEffect } from "react";
import { getAllClients } from "../services/firebaseService";

export const ClientsContext = createContext();

export const ClientsProvider = ({ children }) => {
  const [clients, setClients] = useState([]);

  const addClient = (client) => {
    setClients((prevClients) => [...prevClients, client]);
  };

  useEffect(() => {
    const fetchClients = async () => {
        const clientsData = await getAllClients();
        const filteredClients = clientsData.map(client => ({ nombre: client.nombre }));
        setClients(filteredClients);
    };
    fetchClients();
}, []);

  return (
    <ClientsContext.Provider value={{ clients, addClient }}>
      {children}
    </ClientsContext.Provider>
  );
};
