import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  Flex,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import ConfirmSaleForm from "../forms/ConfirmSaleForm";

const Carrito = ({ cart, handleAddSale, removeItemFromCart, clients, selectedClient, setSelectedClient, newClientName, setNewClientName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const total = cart.reduce((sum, [nombre, precio, cantidad]) => sum + (precio * cantidad), 0).toFixed(2);

  const handleConfirmClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Text fontSize="20px" fontWeight="bold">TOTAL:</Text>
          <Text fontSize="20px" fontWeight="bold">{total} €</Text>
        </Flex>

        <Button
          onClick={handleConfirmClick}
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

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirmar Venta</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ConfirmSaleForm 
                cart={cart} 
                clients={clients} 
                handleAddSale={handleAddSale} 
                onClose={handleCloseModal} 
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default Carrito;
