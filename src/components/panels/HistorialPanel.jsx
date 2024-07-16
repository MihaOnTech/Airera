import React, { useContext } from "react";
import { Timestamp } from "firebase/firestore";
import {
  Box,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Button,
  Spinner
} from "@chakra-ui/react";
import { SalesContext } from "../../contexts/SalesContext";


const Historial = () => {
  const { sales, markAsCompleted, loading, error } = useContext(SalesContext);

  const handleCompleteSale = (id) => {
    markAsCompleted(id);
  };

  if (loading) {
    return <Spinner size="xl" />;
  }

  if (error) {
    return <Text>Error loading data: {error.message}</Text>;
  }

  return (
    <Box padding={4} height="86vh" overflow="auto">
      <SimpleGrid columns={{ base: 1, md: 1 }} spacing={6}>
        {[...sales].reverse().map((sale) => {
          if (!sale || !sale.items || !Array.isArray(sale.items)) {
            console.warn("Venta inválida o sin items:", sale);
            return null;
          }

          return (
            <Accordion key={sale.UUID} allowToggle>
              <AccordionItem 
                borderWidth={"2px"} 
                borderColor={"black"} 
                borderRadius={"5px"}  
                bg={sale.status === "Pendiente" ? "brand.300" : "brand.50"}>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize="25px"
                    fontWeight={"normal"}
                  >
                    <Text>
                     {sale.cliente} - Importe: {sale.importe.toFixed(2)}€ - {sale.status}
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  {sale.items &&
                    sale.items.map(
                      (item, index) =>
                        item && (
                          <Text key={index} fontSize="20px">
                            {item.cantidad} x {item.nombre}
                          </Text>
                        )
                    )}
                  
                  {sale.status === "Pendiente" ? 
                  <Button
                    mt={4}
                    size="md"
                    onClick={() => handleCompleteSale(sale.id)}
                    bg={"brand.50"}
                  >
                    Cobrar
                  </Button> : <></>}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Historial;
