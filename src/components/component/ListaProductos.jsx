import React from "react";
import { Box, SimpleGrid, Button } from "@chakra-ui/react";

const ListaProductos = ({ products, handleAddToCart }) => {
  return (
    <Box w="100%" h="100%" overflow="auto">
      <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }} spacing={4}>
        {products.map((product) => (
          <Button
            key={product.id}
            onClick={() => handleAddToCart(product)}
            w="100%"  // Se adapta al ancho de la celda de la cuadrícula
            h="100px" // Altura fija para todos los botones
            p={4}
            bg="brand.100"
            fontSize="18px"
            _hover={{ bg: "brand.50" }}
            overflow="hidden"  // Asegura que el contenido no se desborde del botón
            whiteSpace="normal"  // Permite que el texto ocupe más de una línea
            textAlign="center"  // Centra el texto horizontalmente
            verticalAlign="middle"  // Centra el texto verticalmente
            borderWidth={'2px'}
            borderColor={'black'}
            fontWeight={'normal'}
            lineHeight="1.2"  // Ajusta la altura de línea para mejorar la legibilidad

          >
            {product.Nombre}
          </Button>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ListaProductos;
