import React from "react";
import { Box, Button, Text, Flex, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons"; // Icono de la X

const Carrito = ({ cart, handleAddSale, removeItemFromCart }) => {
  // Calcular el total del importe
  const total = cart.reduce((sum, [nombre, precio, cantidad]) => sum + (precio * cantidad), 0).toFixed(2);

  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      borderRadius="md"
      borderWidth={"5px"}
      borderColor={"black"}
      bg={'brand.100'}
    >
      {/* Lista de productos en la cesta */}
      <Box
        height={"70%"}
        overflowY="auto"
        fontSize={"25px"}
        p={4}
        fontWeight={"normal"}
        color={'black'}
      >
        {cart.map(([nombre, precio, cantidad], index) => (
          <Flex
            key={index}
            borderRadius="md"
            align="center"
            justifyContent="space-between"
            m={2}
          >
            <Text>{`${cantidad} x ${nombre} `}</Text>
            <Flex align="center">
              <Text mr={"10px"}>{`${(precio * cantidad).toFixed(2)} €`}</Text>
              <IconButton
                aria-label="Eliminar elemento"
                icon={<CloseIcon />}
                bg={'brand.50'}
                textColor={'black'}
                size="xs"
                onClick={() => removeItemFromCart(index)}
              />
            </Flex>
          </Flex>
        ))}
      </Box>

      {/* Total del importe */}
      <Flex
        borderRadius="md"
        justifyContent="space-between"
        fontSize="35px"
        fontWeight={"normal"}
        height="7%"
        alignItems="center"
        color={'black'}
        p={2}
        m={2}
      >
        <Text>TOTAL:</Text>
        <Text>{total} €</Text>
      </Flex>

      {/* Botón para completar la venta */}
      <Button
        onClick={handleAddSale}
        fontSize="40px"
        borderRadius="md"
        height="23%"
        m={3}
        bg={'brand.50'}
        borderWidth={"2px"}
        borderColor={"black"}
        fontWeight={"medium"}
      >
        Confirmar
      </Button>
    </Box>
  );
};

export default Carrito;
