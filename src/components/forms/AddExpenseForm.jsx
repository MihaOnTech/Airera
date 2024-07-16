import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';

const AddExpenseForm = () => {
  return (
    <Box as="form">
      <FormControl id="date" mb="4">
        <FormLabel>Fecha</FormLabel>
        <Input type="date" />
      </FormControl>

      <FormControl id="amount" mb="4">
        <FormLabel>Importe</FormLabel>
        <Input type="number" step="0.01" />
      </FormControl>

      <FormControl id="payer" mb="4">
        <FormLabel>Pagador</FormLabel>
        <Input type="text" />
      </FormControl>

      <FormControl id="supplier" mb="4">
        <FormLabel>Proveedor</FormLabel>
        <Input type="text" />
      </FormControl>

      <FormControl id="status" mb="4">
        <FormLabel>Status</FormLabel>
        <Select placeholder="Select status">
          <option value="pending">Pendiente</option>
          <option value="completed">Completado</option>
        </Select>
      </FormControl>

      <Button colorScheme="teal" type="submit">Agregar Gasto</Button>
    </Box>
  );
};

export default AddExpenseForm;
