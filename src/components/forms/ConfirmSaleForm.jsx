import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Checkbox,
  Button,
  Input,
} from "@chakra-ui/react";

const ConfirmSaleForm = ({ cart, clients, handleAddSale, onClose }) => {
  const [clientId, setClientId] = useState("");
  const [newClientName, setNewClientName] = useState("");
  const [paid, setPaid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const saleStatus = paid ? "Pagado" : "Pendiente";
    const client = newClientName || clientId;
    handleAddSale(client, saleStatus);
    onClose();
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <FormControl id="client" mb={4}>
        <FormLabel>Cliente</FormLabel>
        <Select
          placeholder="Selecciona cliente"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          isDisabled={newClientName !== ""}
        >
          {clients.map((client, index) => (
            <option key={index} value={client.nombre}>
              {client.nombre}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl id="new-client" mb={4}>
        <FormLabel>Nuevo Cliente</FormLabel>
        <Input
          placeholder="Introduce un nuevo nombre de cliente"
          value={newClientName}
          onChange={(e) => setNewClientName(e.target.value)}
          isDisabled={clientId !== ""}
        />
      </FormControl>
      <FormControl id="paid" mb={4}>
        <Checkbox isChecked={paid} onChange={(e) => setPaid(e.target.checked)}>
          Pagado
        </Checkbox>
      </FormControl>
      <Button type="submit" colorScheme="blue">
        Confirmar
      </Button>
    </Box>
  );
};

export default ConfirmSaleForm;
