import React from "react";
import { Box, Button, Text, Flex, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons"; // Icono de la X

const Carrito = ({ cart, handleAddSale, removeItemFromCart }) => {
  // Calcular el total del importe
  const total = cart.reduce((sum, item) => sum + item.Precio, 0).toFixed(2);

  return (
    <Box height="100%" display="flex" flexDirection="column" borderRadius="md">
      {/* Lista de productos en la cesta */}
      <Box
        height={"70%"}
        overflowY="auto"
        fontSize={"25px"}
        color={"brand.400"}
        bg={"bra"}
        borderWidth={"5px"}
        borderColor={"brand.400"}
        p={4}
      >
        {cart.map((item, index) => (
          <Flex
            key={index}
            borderRadius="md"
            align="center"
            justifyContent="space-between"
            mb={2}
          >
            <Text>{item.Nombre}</Text>
            <Flex align="center">
              <Text mr={"10px"}>{item.Precio.toFixed(2)} €</Text>
              <IconButton
                aria-label="Eliminar elemento"
                icon={<CloseIcon />}
                colorScheme="red"
                size="sm"
                onClick={() => removeItemFromCart(index)} // Llama a la función para eliminar el elemento
              />
            </Flex>
          </Flex>
        ))}
      </Box>

      {/* Total del importe */}
      <Flex
        bg="brand.200"
        borderRadius="md"
        color={"brand.400"}
        justifyContent="space-between"
        fontSize="30px"
        height="7%"
        alignItems="center"
        p={2}
        mt={2}
      >
        <Text>TOTAL:</Text>
        <Text>{total} €</Text>
      </Flex>

      {/* Botón para completar la venta */}
      <Button
        onClick={handleAddSale}
        colorScheme="green"
        fontSize="30px"
        borderRadius="md"
        height="23%"
        mt={2}
      >
        Confirmar
      </Button>
    </Box>
  );
};

export default Carrito;
