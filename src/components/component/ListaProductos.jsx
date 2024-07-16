import React from "react";
import { Box, SimpleGrid, Button } from "@chakra-ui/react";

const ListaProductos = ({ products, handleAddToCart }) => {
  return (
    <Box w="100%" h="100%" overflow="auto" mt={"15px"}>
      <SimpleGrid columns={{ base: 2, md: 4, lg: 8 }} spacing={3}>
        {products.map((product) => (
          <Button
            key={product.id}
            onClick={() => handleAddToCart(product)}
            w="80px"  // Se adapta al ancho de la celda de la cuadrícula
            h="80px" // Altura fija para todos los botones
            p={2}
            bg="brand.100"
            fontSize="13px"
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
