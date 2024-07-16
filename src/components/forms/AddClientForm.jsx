import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const AddClientForm = () => {
  const [clientName, setClientName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a una API
    console.log({ clientName });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4} bg="gray.100" borderRadius="md">
      <FormControl id="client-name" mb={4}>
        <FormLabel>Nombre</FormLabel>
        <Input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
      </FormControl>
      <Button type="submit" colorScheme="blue">Añadir Cliente</Button>
    </Box>
  );
};

export default AddClientForm;
