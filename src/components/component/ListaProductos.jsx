import React from "react";
import { Box, SimpleGrid, Button } from "@chakra-ui/react";

const ListaProductos = ({ products, handleAddToCart }) => {
  return (
    <Box w="100%" h="100%" overflow="auto">
      <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={4}>
        {products.map((product) => (
          <Button
            key={product.id}
            onClick={() => handleAddToCart(product)}
            w="100%"  // Se adapta al ancho de la celda de la cuadrícula
            h="100px" // Altura fija para todos los botones
            p={4}
            bg="brand.100"
            color="black"
            fontSize="23px"
            _hover={{ bg: "brand.50" }}
            overflow="clip"
          >
            {product.Nombre}
          </Button>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ListaProductos;
