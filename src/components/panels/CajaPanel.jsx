import React, { useState, useContext, useMemo } from "react";
import { Flex, Grid, GridItem, Button, Box, Text } from "@chakra-ui/react";
import { SalesContext } from "../../contexts/SalesContext";

const Caja = () => {
  const { sales } = useContext(SalesContext);
  const [selectedCategory, setSelectedCategory] = useState("Bebidas");

  // Cálculo del total de ventas y beneficio
  const totalSales = useMemo(() => {
    if (!sales) return 0;
    return sales.reduce((acc, sale) => acc + sale.importe, 0);
  }, [sales]);

  const cajaInicial = 200;
  const beneficio = totalSales - cajaInicial;

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
          {"VENTAS"}
          <Text mt={4} fontSize="xl" fontWeight="bold">
            Total: {totalSales.toFixed(2)}€
          </Text>
        </Box>
      </GridItem>
      <GridItem area={"right"} bg={"blue"}>
        STOCK
      </GridItem>
    </Grid>
  );
};

export default Caja;
