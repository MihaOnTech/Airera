import React from "react";
import { Box, Grid, Button } from "@chakra-ui/react";

const Categorias = ({ products, setSelectedCategory }) => { 

  if (!products || products.length === 0) {
      console.warn("Products is undefined or empty:", products);
      return null; // No renderiza nada si products está vacío o undefined
  }
  
  // Obtener las categorías únicas de los productos
  const categories = [...new Set(products.map(product => product.Categoria))];

  // Calcular el número de columnas basado en el número de categorías
  const numColumns = categories.length;

  return (
    <Box w="100%" h="100%" overflow="hidden">
      <Grid templateColumns={`repeat(${numColumns}, 1fr)`} gap={2} w="100%" h="100%">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            w="100%"
            h="100%"
            bg="brand.100"
            _hover={{ bg: "brand.50" }}
            fontSize="20px"
            borderWidth={'2px'}
            borderColor={'black'}
            fontWeight={"normal"}
          >
            {category}
          </Button>
        ))}
      </Grid>
    </Box>
  );
};

export default Categorias;
