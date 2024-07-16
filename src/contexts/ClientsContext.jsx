import React, { createContext, useState, useEffect } from "react";
import { getAllClients, addClient } from "../services/firebaseService";

export const ClientsContext = createContext();

export const ClientsProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true);
      setError(null);
      try {
        const clientsData = await getAllClients();
        setClients(clientsData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

const addNewClient = async (client) => {
  try {
    const newClient = await addClient(client)
    setClients((prevClients) => [...prevClients, client]);
    console.log(newClient);
  } catch (error) {
    setError(error)
  }
};

  return (
    <ClientsContext.Provider value={{ clients, loading, error, addNewClient }}>
      {children}
    </ClientsContext.Provider>
  );
};
