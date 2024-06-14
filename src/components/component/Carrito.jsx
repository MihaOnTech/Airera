import React from "react";
import { Box, Button, VStack } from "@chakra-ui/react";

const Carrito = ({ cart, handleAddSale }) => {
  return (
    <Box>
      <VStack>
        {cart.map((item, index) => (
          <Box key={index} bg="gray.600" p={2} borderRadius="md" >
            {item.Nombre}  {item.Precio} €
          </Box>
        ))}
        <Button onClick={handleAddSale} colorScheme="green">
          Completar Venta
        </Button>
      </VStack>
    </Box>
  );
};

export default Carrito;
