import React, { useContext } from "react";
import { Flex, Grid, GridItem, Button, Box, Text, Spinner } from "@chakra-ui/react";
import { SalesContext } from "../../contexts/SalesContext";

const Caja = () => {
  const { caja, loading, error } = useContext(SalesContext);

  if (loading) {
    return <Spinner size="xl" />;
  }

  if (error) {
    return <Text>Error loading data: {error.message}</Text>;
  }

  return (
    <Grid
      height="86vh"
      templateAreas={`"top top"
                      "left right"`}
      gridTemplateRows={"10vh 1fr"}
      gridTemplateColumns={"50vw 1fr"}
      gap="4"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"top"} color="white" bg={"pink"}>
        <Flex justifyContent="space-between" p={2}>
          <Button colorScheme="teal">Cerrar Caja</Button>
          <Button colorScheme="orange">Calcular Stock</Button>
        </Flex>
      </GridItem>
      <GridItem area={"left"} bg={"brand.300"}>
        <Box overflowY="auto" p={4}>
          <Text fontSize="2xl" fontWeight="bold">VENTAS</Text>
          {console.log(caja)}
          {caja && caja.items && Array.isArray(caja.items) && caja.items.length > 0 ? (
            caja.items.map((item, index) => (
              <Flex key={index} justifyContent="space-between" mt={2}>
                <Text>{item.cantidad + "  x  " + item.nombre}</Text>
              </Flex>
            ))
          ) : (
            <Text>No items found</Text>
          )}
          <Text mt={4} fontSize="xl" fontWeight="bold">
            Total: {caja.importe ? caja.importe.toFixed(2) : 0}€
          </Text>
        </Box>
      </GridItem>
      <GridItem area={"right"} bg={"blue"}>
        <Text fontSize="2xl" fontWeight="bold">STOCK</Text>
        {/* Aquí podrías agregar el contenido relacionado con el stock */}
      </GridItem>
    </Grid>
  );
};

export default Caja;
