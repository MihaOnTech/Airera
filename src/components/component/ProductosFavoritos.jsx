import React from "react";
import { Box, Grid, SimpleGrid, Button } from "@chakra-ui/react";

const ProductosFavoritos = ({ products, handleAddToCart }) => {
  return (
    <Box w="100%" h="100%" overflow="auto">
      <Grid templateRows={`repeat(${numColumns}, 1fr)`} gap={2} w="100%" h="100%">
        {products.map((product) => (
          <Button
            key={product.id}
            onClick={() => handleAddToCart(product)}
            w="100%"  // Se adapta al ancho de la celda de la cuadrícula
            h="100px" // Altura fija para todos los botones
            p={4}
            bg="brand.100"
            fontSize="23px"
            _hover={{ bg: "brand.50" }}
            overflow="clip"
            borderWidth={'2px'}
            borderColor={'black'}
            fontWeight={'normal'}
          >
            {product.Nombre}
          </Button>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductosFavoritos;
