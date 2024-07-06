import React from "react";
import { Box, Button, Text, Flex, IconButton, Select, Input } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const Carrito = ({ cart, handleAddSale, removeItemFromCart, clients, selectedClient, setSelectedClient, newClientName, setNewClientName }) => {
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
      <Box
        flex="1"
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

      <Box p={4} bg="brand.100" borderTopWidth="1px" borderColor="black" color={"black"}>
        <Flex direction="column" width="100%" mb={4}>
          <Select
            placeholder="Nuevo Cliente"
            onChange={(e) => setSelectedClient(e.target.value)}
            value={selectedClient}
            mb="2"
          >
            {clients.map((client, index) => (
              <option key={index} value={client.nombre}>
                {client.nombre}
              </option>
            ))}
          </Select>
          <Input
            placeholder="Nuevo Cliente"
            value={newClientName}
            onChange={(e) => setNewClientName(e.target.value)}
            mb="2"
          />
        </Flex>

        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Text fontSize="20px" fontWeight="bold">TOTAL:</Text>
          <Text fontSize="20px" fontWeight="bold">{total} €</Text>
        </Flex>

        <Button
          onClick={handleAddSale}
          fontSize="20px"
          borderRadius="md"
          height="40px"
          bg={'brand.50'}
          borderWidth={"2px"}
          borderColor={"black"}
          fontWeight={"medium"}
          width="100%"
        >
          Confirmar
        </Button>
      </Box>
    </Box>
  );
};

export default Carrito;
