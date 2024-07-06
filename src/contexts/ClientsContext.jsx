// src/contexts/ClientsContext.js
import React, { createContext, useState } from "react";

export const ClientsContext = createContext();

export const ClientsProvider = ({ children }) => {
  const [clients, setClients] = useState([]);

  const addClient = (client) => {
    setClients((prevClients) => [...prevClients, client]);
  };

  return (
    <ClientsContext.Provider value={{ clients, addClient }}>
      {children}
    </ClientsContext.Provider>
  );
};
