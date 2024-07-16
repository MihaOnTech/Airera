import React, { useState, useContext } from "react";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { ClientsContext } from "../../contexts/ClientsContext";

const AddClientForm = () => {
  const { addNewClient } = useContext(ClientsContext);
  const [clientName, setClientName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNewClient({ nombre: clientName });
      console.log("Cliente añadido con éxito");
      setClientName("");
    } catch (error) {
      console.error("Error añadiendo el cliente:", error);
    }
  };
  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      p={4}
      bg={"brand.100"}
      borderRadius="5px"
      borderWidth={"2px"}
      borderColor={"black"}
    >
      <FormControl id="client-name" mb={4} >
        <FormLabel>Nombre</FormLabel>
        <Input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          borderRadius="5px"
          borderWidth={"1px"}
          borderColor={"black"}
        />
      </FormControl>
      <Button type="submit" colorScheme="blue">
        Añadir Cliente
      </Button>
    </Box>
  );
};

export default AddClientForm;
